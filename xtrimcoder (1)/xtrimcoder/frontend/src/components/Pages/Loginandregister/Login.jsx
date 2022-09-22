import './login.css'
import React, { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import AuthContext from '../../../context/AuthContext'

const Login = () => {
    const history = useNavigate()
    const [ user, setUser] = useState({
        email:"",
        password:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const { getLoggedIn } = useContext(AuthContext);
    async function login() {
      try {
        const { email, password } = user
        await axios.post(          "auth/login",user        );
        await getLoggedIn();
        history("/");
      } catch (err) {
        console.error(err);
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
              <input  className="form-control" type="text" name="email"
             value={user.email}
              placeholder="Your Email"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input className="form-control" type="password" name="password"
             value={user.password}
              placeholder="Your Password"
               onChange={ handleChange }/>
            </div>
            <div className="text-center"><button className="btn btn-color px-5 mb-5 w-100" onClick={login}>Login</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <a href="/register" className="text-dark fw-bold">Create New Account</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

    </div>
  )
}

export default Login;