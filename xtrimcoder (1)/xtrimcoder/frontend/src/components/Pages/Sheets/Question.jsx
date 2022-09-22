import React from 'react'

export default function Question(props) {
   return (
    <a href={props.link} className="list-group-item">
        <h6> <a> {props.title}</a> <a className="fa fa-check" style={{alignItems:"right" ,color:"green"}} aria-hidden="true"></a></h6> 
    </a>
  )
}
