import React, { useState } from 'react'
import "./Counter.css"

function Counter() {
    const [count,setCount] = useState(0);
  return (
    <>
        <div className='Container'>
            <h1 className='title'>Counter</h1>
            <div className='content'>
                <button className='minus' onClick={()=>setCount(count-1)}>-</button>
                <h1>{count}</h1>
                <button className='plus' onClick={()=>setCount(count+1)}>+</button>
            </div>
            <div>
                <button className='resetButton' onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
    </>
  )
}

export default Counter