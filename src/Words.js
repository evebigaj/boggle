import React from 'react'

const Words = (props) => {
    return <>
    <section id="words">
    <h1> Words </h1>
    <ul>
        {props.words.map(word => <li key={word}>{word}</li>)}
    </ul>
    </section>
    </>
}

export default Words