import React, { useEffect } from "react"
import filterIcon from "../Assets/Images/filter.svg"
import ConversationCard from "./ConversationCard"
import { useDispatch, useSelector } from "react-redux"

function Conversations() {
    const state = useSelector(state => state.conversationReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        // mocking an API call on Load
        dispatch({ type: "LOAD_CONVOS" })
    }, [dispatch])


    return (
        <div className="conversations d-sm-none">
            <div className="wrapper">
                <div className="filter-stack">
                    <div className="header">
                        <div>
                            <h1 style={{ marginBottom: 0 }}>Conversations</h1>
                            <p style={{ marginTop: 2 }} className="text-small font-semibold">track user engagement</p>
                        </div>
                        <img src={filterIcon} alt="filter" />
                    </div>
                    <div>
                        <input className="form-control" style={{ marginTop: 15 }} placeholder="search by conversations and contacts" />
                    </div>
                    <div className="text-xs fw-bold flex-between" style={{ marginTop: 20 }}>
                        Sort by : <span className="active-link">Created Date</span> <span>Last Activity</span> <span>Time Spent</span>
                    </div>
                    <div style={{ marginTop: 30 }}>
                        <ConversationCard convos={state.convos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversations