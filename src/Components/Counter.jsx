import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0)


  return (
    <div>
       <h1>Counter:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Dcrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(preve=>preve+5)}>ADD5</button>



    </div>
  )
}

export default Counter