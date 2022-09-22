import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../context/AuthContext';
import { useNavigate } from "react-router-dom"

export default function AddQuestion() {
  const history = useNavigate()
  const { UserName } = useContext(AuthContext);
  const { loggedIn } = useContext(AuthContext);
   
  const [ user, setUser] = useState({
    question:"",
    body:"",
    author:"",
    tags: "",
    date:""
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const submitquestion = () => {
  if(loggedIn){
    user.author=UserName;
    const { question,body,author, tags } = user
    if( question&&body&&author&&tags){
      console.log(user);
      user.date=new Date();
        axios.post("/dis/create",user)
        .then( res => {
            alert(res.data.message)
            history("/discussion")
        })
    } else {
        alert("invlid input")
    }
  }
  else{
    alert("Please Login to Ask Question")
  }
    }






  return (
    <div className='my-4 mx-4'>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Question Title</label>
    <input className="form-control" type="text" name="question"  value={user.question}    onChange={ handleChange }/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Question Discription</label>
    <input className="form-control" type="text" name="body"  value={user.body}    onChange={ handleChange }/>
    <div id="emailHelp" className="form-text">Discribe the Question with Constraints </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Question Tags</label>
    <input className="form-control" type="text" name="tags"  value={user.tags}  onChange={ handleChange }/>
  </div>
</form>
<button onClick={submitquestion} className="btn btn-primary">Submit</button>

    </div>
  )
}
