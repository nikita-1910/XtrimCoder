import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import LogOutBtn from './Pages/Loginandregister/LogOutBtn';


export default function Header() {

  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{fontFamily:"Qwitcher Grypen", fontSize:"35px"}}>
        {/* <img src={Logo} height={"60px"}/> */}
        XtrimCoder
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>Home</a>
        </li>
        
        {/* <li className="nav-item dropdown">
          <a className="nav-link " href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>Practice</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/tcspractice" style={{fontFamily:"Caveat"}}>TCS</a></li>
            <li><a className="dropdown-item" href="/infosyspractice" style={{fontFamily:"Caveat"}}>Infosys</a></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li> */}

        <li className="nav-item">
          <a className="nav-link" href="/practice" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>Practice</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/achivers" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>Achivers</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/discussion" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>Discussion</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>DSA Sheet</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/cpsheet" style={{fontFamily:"Caveat"}}>Striver CP Sheet</a></li>
            <li><a className="dropdown-item" href="/450dsa" style={{fontFamily:"Caveat"}}>Luv Babber 450 DSA</a></li>
            <li><hr className="dropdown-divider"/></li>
            {/* <li><a className="dropdown-item" href="#" style={{fontFamily:"Amatic SC"}}>Upcomming</a></li> */}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>RoadMap</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/cproadmap" style={{fontFamily:"Caveat"}}>Compititive Programming</a></li>
            <li><a className="dropdown-item" href="/mlroadmap" style={{fontFamily:"Caveat"}}>Machine Learning</a></li>
            <li><a className="dropdown-item" href="/placements" style={{fontFamily:"Caveat"}}>Placements</a></li>
            <li><hr className="dropdown-divider"/></li>
            {/* <li><a className="dropdown-item" href="#" style={{fontFamily:"Amatic SC"}}>Upcomming</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/timeline" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>Timeline</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
      <form className="d-flex">
      {!loggedIn ? <a className="btn btn-outline-dark" href='/login' type="submit">Login</a>:<LogOutBtn />}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
