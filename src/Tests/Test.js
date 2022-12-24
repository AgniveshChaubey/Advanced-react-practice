import React, { useState } from 'react'
import { useConsoleLog } from '../CustomHooks';

export const Test = () => {
  const [count, setCount] = useState(0);
  useConsoleLog(count)

  const increment = ()=>{
    setCount((prevCount) => prevCount+1)
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Add 1</button>
    </div>
  )
}


