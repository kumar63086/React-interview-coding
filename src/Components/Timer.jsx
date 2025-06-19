import React, { useRef, useState } from 'react'

export const Timer = () => {
    const [count,setCount]=useState(0)
    const intervelref=useRef()
    const startTimer=()=>{

        intervelref.current=setInterval(()=>{
          setCount(preve=>preve+1)
        },100)
    }
    const stoptimer=()=>{
        setCount(0)
        clearInterval(intervelref.current)
    }
    const pauses=()=>{
     clearInterval(intervelref.current)
    }
  return (
    <div>
        <h1>Timer</h1>
        <h2>count: {count}</h2>
        <button onClick={()=>startTimer()}>start</button>
        <button onClick={()=>pauses()}>pause</button>
        <button onClick={()=>stoptimer()}>stop</button>


    </div>
  )
}
