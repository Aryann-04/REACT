 import React, { useState } from 'react'

export default function Events() {
    const [name,setName]=useState('')
   const [Subject,setSubject]=useState('')
    const [city,setCity]=useState('')

    const handleClick = () =>{
        console.log("hello")
    } 
    const handleChange=(e)=>{
        console.log(e.target.value);
    }
  return (
    <div>
      <h1>EVENTS</h1>
      <h1>{name}</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" onChange={(e)=>setSubject(e.target.value)}/>
      <input type="text" onChange={(e)=>setCity(e.target.value)}/>

      
      <button onClick={handleClick}>CLICK</button>
    </div>
  );
}
