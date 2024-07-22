import React, { useState } from 'react'

export default function Hook2() {
    
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [ab, setAB] = useState("0")
  return (
    <div>
        <span>A:</span>
         <input type='text' placeholder='Nhập a' value={a} onChange={(e)=>setA(e.target.value)}></input><br/>
         <span>B:</span>
        <input type='text' placeholder='Nhập b' value={b} onChange={(e)=>setB(e.target.value)}></input><br/>
        
        <button onClick={()=>setAB(a*1+b)}>+</button>
        <button onClick={()=>setAB(a-b)}>-</button>
        <button onClick={()=>setAB(a*b)}>*</button>
        <button onClick={()=>setAB((a/b).toFixed(2))}>/</button>
        <h1>
            Giá trị: {ab}
        </h1>
    </div>
  )
}
