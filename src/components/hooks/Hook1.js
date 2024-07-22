import React, { useState } from 'react'

export default function Hook1() {
    const [name, setName] = useState("")

    

  return (
    <div>
        <input type='text' placeholder='Nhập tên' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <h1>
            Tên cảu bạn là {name}
        </h1>
    </div>

  )
}

