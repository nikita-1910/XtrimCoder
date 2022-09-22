const router = require("express").Router();
const Discussion = require("../models/discussionModel");

//Root route
router.get("/", (req, res) => {
    try {
        Discussion.find()
        .then((discussion) => res.json(discussion))
        .catch((err) => res.status(400).json("Error: " + err));

    } catch (err) {
      res.json(false);
    }
});

//Route to add a new post
router.route("/create").post((req, res) => {
    //Retrieve data for post
    const { question, body, author, tags} = req.body;
    const date = Date.parse(req.body.date);
    const comments = [];
    //Create a new Post and save it to DB
    const newDiscussion = new Discussion({
        question,
        body,
        author,
        tags,
        date,
        comments,
    });

    // Save the new post
    newDiscussion
        .save()
        .then(() => res.json("Question Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//route to display a particular post
router.route("/:id").get((req, res) => {
    Discussion.findById(req.params.id)
        .then((discussion) => res.json(discussion))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Route to edit a particular post
router.route("/edit/:id").post((req, res) => {
    Discussion.findById(req.params.id)
        .then((discussion) => {
            discussion.title = req.body.title;
            discussion.body = req.body.body;
            discussion.solution = req.body.solution;
            discussion.tags=req.body.tags;
            discussion.date = Date.parse(req.body.date);
            discussion.comments = req.body.comments;
            discussion.save()
                .then(() => res.json("Question Edited"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

// Route to Delete a route
router.route("/:id").delete((req, res) => {
    Discussion.findByIdAndDelete(req.params.id)
        .then(() => res.json("Question Deleted"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addcomment").post((req, res) => {
    const { id,comment } = req.body;
    Discussion.findOneAndUpdate({_id:id}, {$push: {comments:comment}})
    .then(() => res.json("Comment Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;