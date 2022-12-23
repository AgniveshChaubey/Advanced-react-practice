import React, { useEffect } from 'react'

export const useConsoleLog = (varName) => {
    useEffect(()=>{
        console.log(varName);
    }, [varName])
  return (
    <div></div>
  )
}


