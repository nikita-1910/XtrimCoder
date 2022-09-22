import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import AuthContext from "../../../context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useNavigate()

  async function logOut() {
    // await axios.get("http://localhost:5000/auth/logout");
    await axios.get("/auth/logout");
    await getLoggedIn();
    history('/');
  }
  return <button className="btn btn-outline-dark" onClick={logOut}>Logout</button>;
}

export default LogOutBtn;