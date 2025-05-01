import React from 'react'

function Joke(props) {
  return (
    <div>
        <h2>Jokes</h2>
        <p>{props.question}</p>
        <p>{props.answer}</p>
    </div>
  )
}

export default Joke