import React, { useContext, useEffect, useState } from 'react'
import Home from './Pages/Home/Home.jsx'
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Timeline from './Pages/TimeLine/Timeline.jsx';
import Achivers from './Pages/Achivers/Achivers.jsx';
import Cpsheet from './Pages/Sheets/Cpsheet.jsx';
import Mlroadmap from './Pages/Roadmaps/Mlroadmap.jsx';
import Discussion from './Pages/Discussion/Discussion.jsx';
import Cproadmap from './Pages/Roadmaps/Cproadmap.jsx';
import Login from './Pages/Loginandregister/Login.jsx';
import Register from './Pages/Loginandregister/Register.jsx';
import axios from "axios";
import AuthContext from '../context/AuthContext.jsx';
import Practice from './Pages/Practice/Practice.jsx';
import QuestionDiscription from './Pages/Practice/QuestionDiscriprion.jsx';
import DiscussionDiscription from './Pages/Discussion/DiscussionDiscription.jsx';
import Dsa450 from './Pages/Sheets/Dsa450.jsx';
axios.defaults.withCredentials = true;
let firstRender = true;
export default function Body() {
  const { loggedIn } = useContext(AuthContext);
  const [user, setUser] = useState();
  const refreshToken = async () => {
    const res = await axios
      .get("/api/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  
  const sednRequest = async () => {
    const res = await axios
      .get("/api/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sednRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 29);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/timeline" element={<Timeline/>}/>
    <Route path="/achivers" element={<Achivers/>}/>
    <Route path="/practice" element={<Practice/>}/>
    <Route path="/cpsheet" element={<Cpsheet/>}/>
    <Route path="/450dsa" element={<Dsa450/>}/>
    <Route path="/mlroadmap" element={<Mlroadmap/>}/>
    <Route path="/cproadmap" element={<Cproadmap/>}/>
    <Route path="/placements" element={<Cproadmap/>}/>
    <Route path="/discussion" element={<Discussion/>}/>
    <Route path="/login" element={loggedIn?<Home/>:<Login/>}/>
    <Route path="/register" element={loggedIn?<Home/>:<Register/>}/>
    <Route path="/practice/:id" element={<QuestionDiscription/>}/>
    <Route path="/discussion/:id" element={<DiscussionDiscription/>}/>
    </Routes>
    {/* <div>{user && <h1>{user.name}</h1>}</div>  */}
    </div>
  )
}
