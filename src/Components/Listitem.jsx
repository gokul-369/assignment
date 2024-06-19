import React from "react"
import mail from "../Assets/Images/colorMail.svg"
import ctr from "../Assets/Images/CTR.svg"
import share from "../Assets/Images/share.svg"
import location from "../Assets/Images/location.svg"

function Listitem({ list }) {
    return (
        list.map((e, i) => (
            <div className="list-item-container" key={e.id}>
                <div className="content-panel">
                    <img src={e?.profilePicture} alt="profile" />
                    <span style={{ margin: "0 20px" }} className="text-normal fw-bold">{e?.name}</span>
                    <span className="separator d-sm-none" style={{ color: "#E2E2E2" }}>|</span>
                    <span className="text-xs d-sm-none" style={{ margin: "0 20px" }} >last viewed {e?.lastViewed}</span>
                </div>
                <div className="icon-panel">
                    <span className="text-xs color-gray">{e?.count}</span>
                    <img src={mail} alt="mail" />
                    <img src={ctr} alt="ctr" />
                    <img src={share} alt="share" />
                    <span className="border-color"> | </span>
                    <img src={location} alt="location" />
                </div>
            </div>
        ))
    )
}

export default Listitem