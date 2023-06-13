import React from 'react'
import './Design.css'
const MainContent = (props) => {
  
  return (
    <div className='simple'>
      <div className='kaka'>{props.retake.name}</div>
        <div className='img'><img src={props.retake.img} alt=""/></div>
        <div className='kakaa'>{props.retake.other}</div>

    </div>
  )
}

export default MainContent
