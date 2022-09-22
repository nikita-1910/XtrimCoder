import React from 'react'
export default function Questions(props) {
  return (
    <div>
    <div className="alert alert-dark my-4 row" role="alert">
         <div className='col'>
            <a href={'/practice/'+props.link}><h5>{props.title}</h5></a>
         </div>
            <div className='col col-lg-2'><h6 style={{textAlign:"center"}}>Published On: {props.date}</h6></div>
        </div>
    </div>
  )
}
