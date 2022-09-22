import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className='about' style={{bottom:"0px"}}>
        <hr/>
      <h1 style={{textAlign:"center", fontFamily:"Qwitcher Grypen"}}>Unleash your Extrime Programmer</h1>
    <div>
    <p className="row">
      {/* <a className='col' href="http://www.agilewebsitedev.com" target="_blank" title="WordPress developer with strong skills in HTML and CSS">Agile Website Dev</a> */}
      {/* <a className='col' href="http://www.agileseo.net" target="_blank" title="SEO training in Chandigarh, Mohali and Panchkula">Agile SEO</a> */}
    </p>
    <p className="about-author">
      &copy; XtrimCoder <a target="_blank"> Be Extrime </a>     <a href='/' target="_blank"></a>
    </p>
  </div>
    </div>
  )
}
