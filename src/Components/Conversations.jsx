import React, { useEffect } from 'react'
import filterIcon from "../Assets/Images/filter.svg"
import ConversationCard from './ConversationCard'
import { useDispatch, useSelector } from 'react-redux'

function Conversations() {
    const state = useSelector(state => state.conversationReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        // mocking an API call on Load in order to prevent a warning that says dispatch is never used
        dispatch({ type: 'LOAD_CONVOS' })
    }, [dispatch])


    return (
        <div className='conversations d-sm-none'>
            <div className='wrapper'>
                <div className='filter-stack'>
                    <div className='header'>
                        <div>
                            <h1 style={{ marginBottom: 0 }}>Conversations</h1>
                            <p style={{ marginTop: 2 }} className='text-small'>Track user engagement</p>
                        </div>
                        <img src={filterIcon} alt='filter' />
                    </div>
                    <div>
                        <input className='form-control' style={{ marginTop: 15 }} placeholder='search by conversations and contacts' />
                    </div>
                    <div className='text-xs fw-bold' style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                        Sort by : <span className='active-link'>Created Date</span> <span>Last Activity</span> <span>Time Spent</span>
                    </div>
                    <ConversationCard convos={state.convos} />
                </div>
            </div>
        </div>
    )
}

export default Conversations