import React from 'react'
import { useState } from 'react'
const Counter = () => {
    let [X,setX]=useState(0);
    function Refresh (){
        setX(0);
     }
  return (
    <div>
      <div className="box">
        <p>{X}</p>
        <button onClick={()=>setX(++X)}>Increment</button>
        <button onClick={()=>setX(--X)}>Decrement</button>
      </div>
      <button onClick={Refresh}>Reset</button>
    </div>
  )
}

export default Counter
