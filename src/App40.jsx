import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
export default function App40() {
    const [data,setData] = useState()
    const url = "https://jsonplaceholder.typicode.com/users"

const fetchData = async (url) => {
    const response = await axios.get(url)
    setData(response.data)
}

 useEffect(()=>{
    fetchData(url)
 },[])

  return (
    <ul>
        {data && data.map((value)=>(
            <li>{value.name}</li>
        ))}
    </ul>
  )
}