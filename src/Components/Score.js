import React from 'react'

const Score = (props) => {
    return <>
    <section id="score">
    <h1>Score</h1>
    <p id="scorecount">{props.points} </p>
    </section>
    </>
}

export default Score