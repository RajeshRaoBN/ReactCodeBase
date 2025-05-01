import React from 'react'
import Joke from './Joke'
import jokesData from '../data/jokesData'

function Jokes() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.punchline} />)
    console.log(jokesData)
  return (
    <div>
        {jokeComponents}
    </div>
  )
}

export default Jokes