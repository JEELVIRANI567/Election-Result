import React from 'react'

const Card = ({ data }) => {

    return (
        <div className='card-wrapper'>
            <div className={`header ${data.result === "Won" ? "won" : ""}`}>
                <h3>{data.result}</h3>
                <h3>{data.totalVote} ({data.result === "Won" ? "+" : "-"} {data.diffVote})</h3>
            </div>
            <div className='profile'>
                <img src={data.profile ?? "https://results.eci.gov.in/uploads1/candprofile/E25/2024/AC/s08/ARUNA-2024-20240620041121.jpg"} alt="" srcset="" />
            </div>
            <div className='card-body'>
                <h2>{data.name}</h2>
                <h3>{data.partyName}</h3>
            </div>
        </div>
    )
}

export default Card