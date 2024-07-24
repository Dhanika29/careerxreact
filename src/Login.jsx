import React from "react";
import { useState } from "react";
export default function Login() {
  const[user, setUser]=useState()
  const[password,setPassword]=useState()
  const validateuser =() =>{
   if((user === "john@gmail.com" && password === "1234"))
   {
    console.log("validuser");
    
   }
    
  }
  return (
    <div>
      <p>
        <input type="text" onChange={}placeholder="Username"></input>
      </p>
      <p>
        <input type="password" placeholder="Password"></input>
      </p>
      <button onClick={validateuser}>Login</button>
    </div>
  );
}