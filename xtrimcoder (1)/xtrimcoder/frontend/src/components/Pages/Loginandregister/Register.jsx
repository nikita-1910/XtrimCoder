import './login.css'
import React, { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import AuthContext from '../../../context/AuthContext'

const Register = () => {
  const { getLoggedIn } = useContext(AuthContext);
    const history = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        phoneno:"",
        password:"",
        passwordVerify: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    async function signup() {
      try {
        const { name, email,phoneno, password,passwordVerify } = user
        await axios.post("/auth/register",user);
        await getLoggedIn();
        history("/");
      } catch (err) {
        console.error(err);
      }
    }

    const register = () => {
      // console.log(user);
        const { name, email,phoneno, password,passwordVerify } = user
        if(phoneno.length!==10){
          alert("Invalid Phone Number");
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
          alert("Invalid Email");
        }
        else if(!((password === passwordVerify))){
          alert("Password Does not Match")
        }
        else if(name&& email && phoneno && password && (password === passwordVerify)){
            signup();
        } else {
            alert("Please fill all the fields")
        }
      }

   return (
    <div><div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">New User !</h2>
        <div className="text-center mb-5 text-dark">Let's Join us</div>
        <div className="card my-5">

          <div className="card-body cardbody-color p-lg-5">

            <div className="text-center">
              <img src="https://img.icons8.com/color/344/test-account.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>
            <div className="mb-3">
              <input className="form-control" type="text" name="name" 
            value={user.name} 
            placeholder="Enter Your Name" 
            onChange={ handleChange }/>
            </div>
            
            <div className="mb-3">
              <input  className="form-control" type="text" name="email"
             value={user.email}
              placeholder="Enter Your Email"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input  className="form-control" type="tel" name="phoneno"
             value={user.phoneno}
              placeholder="Enter Your Phone Number"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input className="form-control" type="password" name="password"
             value={user.password}
              placeholder="Enter Your Password"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input className="form-control"type="password" name="passwordVerify"
             value={user.passwordVerify}
              placeholder="Re-enter Password" 
              onChange={ handleChange }/>
            </div>
            <div className="text-center"><button className="btn btn-color px-5 mb-5 w-100" onClick={register}>Register</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already
              Registered? <a href="/login" className="text-dark fw-bold"> Login</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

    </div>
  )
}

export default Register