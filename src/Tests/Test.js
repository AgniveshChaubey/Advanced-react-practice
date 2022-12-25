import React from 'react'


const Button = ({children, bgColor}) =>{
  return <button style={{bgColor}}> {children} </button>
} 

const Alert = ({children}) =>{
  return(
    <>
      <div className="Overlay"></div>
      <div className="Alert">{children}</div>
    </>
  )
}

const DeleteButton= () =>{
  return <Button bgColor='red'>Delete</Button>
}

export const Test = () => {
  return (
    <div>
      <header>Testing the app!</header>
      <Alert>
      <h4>Delete Account</h4>
      <DeleteButton />
      </Alert>
    </div>
  )
}


