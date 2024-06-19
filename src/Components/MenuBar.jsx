import React from 'react'
import mobileIcon from "../Assets/Images/Component1.svg"
import stackIcon from "../Assets/Images/Component2.svg"
import messagesIcon from "../Assets/Images/coloredmessages.svg"

function MenuBar() {
  return (
    <div className='menu-bar'>
      <img src={mobileIcon} alt='mobile' />
      <img src={stackIcon} alt='stack' />
      <img src={messagesIcon} alt='messages' />
    </div>
  )
}

export default MenuBar