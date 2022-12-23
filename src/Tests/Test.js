import React, { useState } from 'react'

export const Test = () => {
  let [count, setCount] = useState(0);

  let increment = ()=>{
    setCount((prevCount) => prevCount+1)
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Add 1</button>
    </div>
  )
}
