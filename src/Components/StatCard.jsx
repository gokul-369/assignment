import React from "react"

function StatCard({ stats }) {
    return (
        stats.map((e, i) => (
            <div className="stat-card" key={e.parameter}>
                <div className="flex-between">
                    <span className="fw-bold text-normal">{e.value}</span>
                    <img src={e.icon} alt={e.parameter} />
                </div>
                <span className="text-xs">{e.parameter}</span>
            </div>
        ))
    )
}

export default StatCard