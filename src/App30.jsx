import React from 'react'
import { useState,useRef,useEffect } from 'react'
export default function App30() {
    const [name,setName] = useState()
    const prevName = useRef()
    useEffect(()=>{
        prevName.current = name
    },[name])
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>setName("Red")}>Red</button>
        <button onClick={()=>setName("Green")}>Green</button>
        <h2>Current Value: {name}</h2>
        <h2>Previous Value: {prevName.current}</h2>
    </div>
  )
}