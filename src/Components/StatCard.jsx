import React from 'react'

function StatCard({ stats }) {
    return (
        stats.map((e, i) => (
            <div className='stat-card' key={e.parameter}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='fw-bold' style={{fontSize:14}}>{e.value}</span>
                    <img src={e.icon} alt={e.parameter} />
                </div>
                <span style={{fontSize:10}}>{e.parameter}</span>
            </div>
        ))
    )
}

export default StatCard