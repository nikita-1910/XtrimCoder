import React, { useContext, useEffect, useState } from 'react'
import Achivers from './Achivers'
import Carousel from './Carousel'
import Catagory from './Catagory'
import Team from './Team'
import axios from "axios";
import AuthContext from '../../../context/AuthContext'
axios.defaults.withCredentials = true;
let firstRender = true;

export default function Home() {
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
    <div>
        <Carousel/>
        <Catagory/>
        <Achivers/>
        <Team/>      
    </div>
  )
}
