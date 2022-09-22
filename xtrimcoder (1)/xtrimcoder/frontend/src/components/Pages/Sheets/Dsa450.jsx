import React from 'react'
import Question from './Question'
export default function Dsa450() {
  let items=[' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K'];
  return (
    <div>
        <div className="card my-4">
  <div className="card-header">
    Compititive Programming sheet by "450 Data Structure and Algorithm"
  </div>
  <ul className="list-group list-group-flush">
  {items.map(item=>(
       <Question  link={'https://leetcode.com/problems/sudoku-solver/'} title={item}/>
  ))}
    </ul>
</div>
    </div>
  )
}
