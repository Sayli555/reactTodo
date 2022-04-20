import  { useState } from 'react'

function TodoInput({getData}) {
    const [text,setText]=useState("");
  return (
    <div>
      <input onChange={(e)=>{
          setText(e.target.value)
      }} type="text" placeholder='todo type...' />
      <button 
      onClick={()=>{
          getData(text)
      }}
      >Add</button>
    </div>
  )
}

export {TodoInput}
