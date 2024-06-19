import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import view from "../Assets/Images/view.svg"
import back from "../Assets/Images/back.svg"
import remove from "../Assets/Images/delete.svg"
import StatCard from "./StatCard"
import Listitem from "./Listitem"

function DetailsView() {
  const state = useSelector(state => state.detailsReducer?.convoDetails)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "LOAD_DETAILS" })
  }, [dispatch])

  return (
    <div className="details-view">
      <div className="overlay" >
        <div className="details-view-title">
          <h1 >{state?.title}</h1>
          <div className="icon-set d-sm-none">
            <img src={view} alt="view" />
            <img src={back} alt="back" />
            <img src={remove} alt="remove" />
          </div>
        </div>
      </div>
      <div className="details-content">
        <p className="text-small fw-bold">
          {state?.subTitle}
        </p>
        <p className="text-xs color-lightgray">
          {state?.subTitle}
        </p>
        <div className="stat-container">
          <StatCard stats={state?.stats} />
        </div>
        <div style={{ marginTop: 25 }} className="tabs">
          <span className="fw-bold active-link section-link"> Recipients - {state?.recipientsCount}</span>
          <span className="fw-bold" style={{ marginLeft: 24 }}>Sections - {state?.sectionCount}</span>
        </div>
        <div style={{ marginTop: 30 }}>
          <Listitem list={state?.recipientList} />
        </div>
      </div>
    </div>
  )
}

export default DetailsView