import React from "react"
import gradientSearch from "../Assets/Images/Gradientsearch.svg"
import mobileIcon from "../Assets/Images/Component1.svg"
import stackIcon from "../Assets/Images/Component2.svg"
import messagesIcon from "../Assets/Images/Component8.svg"
import performanceIcon from "../Assets/Images/Component6.svg"
import shareIcon from "../Assets/Images/Component7.svg"

import ellipseIcon from "../Assets/Images/Icons.svg"
import profileImage from "../Assets/Images/profile.svg"

function SideBar() {
  return (
    <div className="sidebar d-sm-none">
      <div className="flex-col flex-center" style={{ height: 400, justifyContent: "space-evenly" }}>
        <img src={gradientSearch} alt="search" />
        <img src={mobileIcon} alt="mobile" />
        <img src={stackIcon} alt="stack" />
        <img src={messagesIcon} alt="messages" />
        <img src={performanceIcon} alt="performance" />
        <img src={shareIcon} alt="share" />
      </div>
      <div className="flex-col flex-center" style={{ height: 150, justifyContent: "space-around" }}>
        <img src={ellipseIcon} alt="ellipse-menu" />
        <img src={profileImage} alt="profile" />
      </div>
    </div>
  )
}

export default SideBar