import React, { useEffect, useState } from 'react'
import Addquestion from './Addquestion';
import Questions from './Questions';

export default function Practice() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/ques/")
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

        {items.map(item=>(
        <Questions key={item.id} title={item.title} date={ new Date(item.date).toDateString()} link={item._id}/>
        ))}
        

        {/* copy paste */}
         {items.map(item=>(
        <Questions key={item.id} title={item.title} date={ new Date(item.date).toDateString()} link={item._id}/>
        ))}
      </div>
    );
  }
}
