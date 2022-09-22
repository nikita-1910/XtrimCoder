import React from 'react'
import './roadmap.css'
export default function Mlroadmap() {
  return (
    <div >
<ul className="timeline">
<li>
  <div className="direction-r">
    <div className="flag-wrapper">
      <span className="flag">Programming Language</span>
      <span className="time-wrapper"><span className="time">1 Month</span></span>
    </div>
    <div className="desc">Learn One Programming language C++, Java, Python. Prefered C++.
    Practice Question From GFG</div>
  </div>
</li>

<li>
  <div className="direction-l">
    <div className="flag-wrapper">
      <span className="flag">Data Structure and Algo.</span>
      <span className="time-wrapper"><span className="time">3 Months</span></span>
    </div>
    <div className="desc">Using Learned Programming Language. Practice DSA Question from GFG, Interview bit, Leetcode </div>
  </div>
</li>
<li>
<div className="direction-r">
    <div className="flag-wrapper">
      <span className="flag">Codechef</span>
      <span className="time-wrapper"><span className="time">1 Month</span></span>
    </div>
    <div className="desc">Start Giving Codechef Contests Regularly.</div>
  </div>
</li>

<li>
  <div className="direction-l">
    <div className="flag-wrapper">
      <span className="flag">CodeForces</span>
      <span className="time-wrapper"><span className="time">3 Months</span></span>
    </div>
    <div className="desc">After Comfortable with Codechef Platform Start Giving Contest on CodeForces.</div>
  </div>
</li>
</ul>
  </div>

  )
}
