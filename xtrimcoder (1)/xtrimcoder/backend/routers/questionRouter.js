const router = require("express").Router();
const Question = require("../models/questionModel");

//Root route
router.get("/", (req, res) => {
    try {
        Question.find()
        .then((question) => res.json(question))
        .catch((err) => res.status(400).json("Error: " + err));

    } catch (err) {
      res.json(false);
    }
});

//Route to add a new post
router.route("/create").post((req, res) => {
    //Retrieve data for post
    const { title, body, solution, tags } = req.body;
    const date = Date.parse(req.body.date);
    const comments = [];
    //Create a new Post and save it to DB
    const newQuestion = new Question({
        title,
        body,
        solution,
        tags,
        date,
        comments,
    });

    // Save the new post
    newQuestion
        .save()
        .then(() => res.json("Question Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//route to display a particular post
router.route("/:id").get((req, res) => {
    Question.findById(req.params.id)
        .then((question) => res.json(question))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Route to edit a particular post
router.route("/edit/:id").post((req, res) => {
    Question.findById(req.params.id)
        .then((question) => {
            question.title = req.body.title;
            question.body = req.body.body;
            question.solution = req.body.solution;
            question.tags=req.body.tags;
            question.date = Date.parse(req.body.date);
            question.comments = req.body.comments;
            question.save()
                .then(() => res.json("Question Edited"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

// Route to Delete a route
router.route("/:id").delete((req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json("Question Deleted"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addcomment").post((req, res) => {
    const { id,comment } = req.body;
    Question.findOneAndUpdate({_id:id}, {$push: {comments:comment}})
    .then(() => res.json("Comment Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;