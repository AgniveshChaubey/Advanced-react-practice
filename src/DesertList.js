import React from 'react'

const DesertList = (props) => {
  return (
    <ul>
        <li>{`${props.desertName} - ${props.desertCalories} cal`}</li>
    </ul>
  )
}

export default DesertList;

