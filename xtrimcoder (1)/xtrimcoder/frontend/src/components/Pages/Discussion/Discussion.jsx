import React, { useContext, useEffect, useState } from 'react'
import AddQuestion from './AddQuestion';
import SingleDiscussion from './SingleDiscussion';
import axios from "axios";
import AuthContext from '../../../context/AuthContext';

export default function Practice() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


 


  useEffect(() => {
    fetch("/dis/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
 
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
      <div style={{textAlign:"end"}} >
       <div className="btn-group dropdown">
          <button type="button" className=" dropdown-toggle btn btn-outline-primary" data-bs-toggle="dropdown" aria-expanded="false" style={{fontFamily:"Amatic SC", fontSize:"25px" ,paddingLeft:"60px",paddingRight:"60px"}}> Add Question </button>
          <div className="dropdown-menu">
          <AddQuestion/>            
          </div>
        </div>
      </div>

        {items.map(item=>(
        <SingleDiscussion key={item.id} title={item.question} date={ new Date(item.date).toDateString()} link={item._id}/>
        ))}

        {/* copy paste         */}
        {items.map(item=>(
        <SingleDiscussion key={item.id} title={item.question} date={ new Date(item.date).toDateString()} link={item._id}/>
        ))}

      </div>
    );
  }
}
