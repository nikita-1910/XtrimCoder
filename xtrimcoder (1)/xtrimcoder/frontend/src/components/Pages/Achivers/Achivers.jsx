import React from 'react'
import Profile from './Profile'

export default function Achivers() {
  return (
    <div>
        <h1 style={{textAlign:"center" ,fontFamily:"Qwitcher Grypen" ,fontSize:"95px"}}>Success Story</h1>
        <div className='row my-4'>
            <div className='col-lg-2 my-2'>
            <img  src="https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-44.jpg?w=740" className="card-img-top rounded-circle" alt="..."/>
            </div>
            <div className='col my-4 mx-4'>
                <h2 >
                John L. Miller
                </h2>
                <p>
                Review your resume, and be able to talk intelligently about everything you put on it.
Read up on Amazon to understand their main lines of business. Get an idea of good or bad things about each division (broadly: retail, digital, AWS). Have a couple questions about Amazon that aren't easy for you to find out yourself, like "what division am I being interviewed for?"
Brush up on coding. Make sure you can write solutions to simple problems easily, if you haven't coded in a while, e.g. "Find the missing number in this array of 1..100."
Review basic data structures and algorithms. Binary trees. Remind yourself what a queue, stack, heap, and sort algorithm are. Review common classes like container classes in the language of your choice.
Sleep. Make sure you're well rested before the interview.
                </p>
            </div>
        </div>
        <div className='row my-4'>
            <div className='col my-4 mx-4'>
                <h2 style={{textAlign:"end"}}>
                    Sanket Dialani
                </h2>
                <p>
                Good that you are halfway there if you are through with simple data structure like Stack, Queue, LinkedList etc.

Use the time to prepare well for Tree and Graph Algorithms, Dynamic Programming, Backtracking, Greedy Algorithms etc. These are always the hot topics for interviews at Amazon.

About the coding part during the interviews, after algorithm is discussed for a problem, the candidate is expected to write clear code which is syntactically and semantically correct. So that has to be practiced extensively.
   </p>
            </div>
            <div className='col-lg-2 my-1'>
            <img  src="https://img.freepik.com/premium-psd/3d-cartoon-character-isolated-3d-rendering_235528-561.jpg?w=740" className="card-img-top rounded-circle" alt="..."/>
            </div>
            
        </div>

      <Profile/>
    </div>
  )
}
