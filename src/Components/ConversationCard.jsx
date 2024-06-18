import React from 'react'

function ConversationCard({ convos }) {
    return (
        convos.map((e, i) => <div className='convo-cards' key={e.id}>
            <img  src={e.image} alt={e.id} />

            <div style={{ width: '80%', marginLeft: 30 }}>
                <div className={`fw-bold ${e.id === 2 && 'active-link'}`} style={{fontSize:14}}>{e.title}</div>
                <p className='text-small color-gray fw-bold' style={{ marginTop: 4 }}>{e.subTitle}</p>
                <p className='text-small color-lightgray' style={{ marginTop: 15 }}>{e.subText}</p>
            </div>
        </div>)
    )
}

export default ConversationCard