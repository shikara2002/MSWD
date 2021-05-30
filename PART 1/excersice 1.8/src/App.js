import React, { useState } from 'react'
import ReactDOM, { render } from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {
  return(
    <div>
      <h1>Statistic</h1>
      <p>good {good} </p>
      <p>neutral {neutral} </p>
      <p>bad {bad} </p>
      <p>all {good + neutral + bad} </p>
      <p>Average {(good + (bad * -1)) / (good + neutral + bad)} </p>
      <p>Positive {(good / (good + neutral + bad)) * 100} $ </p>
    </div>


  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback </h1>
      <button onClick={() => setGood(good + 1)}>good </button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral </button>
      <button onClick={() => setBad(bad + 1)}>bad </button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
export default App