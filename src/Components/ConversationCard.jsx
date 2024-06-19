import React from "react"

function ConversationCard({ convos }) {
    return (
        convos.map((e, i) => <div className="convo-cards" key={e.id}>
            <img src={e.image} alt={e.id} />
            <div style={{ marginLeft: 30 }}>
                <div className={`fw-semibold text-normal ${e.id === 2 && "active-link"}`}>{e.title}</div>
                <p className="text-small color-gray" style={{ marginTop: 5, fontWeight: 600 }}>{e.subTitle}</p>
                <p className="text-small color-lightgray" style={{ marginTop: 16, fontWeight: 500 }}>{e.subText}</p>
            </div>
        </div>)
    )
}

export default ConversationCard