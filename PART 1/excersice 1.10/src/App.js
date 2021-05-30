import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {
  if(good + neutral +bad === 0){
    return(<div>
            <h1>Statistic</h1>
            <p>No feedback gathered </p>

    </div>)
  }
  return(
    <div>
      <h1>Statistic</h1>
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
      <Statistic text="all" value ={good + neutral + bad} />
      <Statistic text="Average" value ={(good - bad) / (good + neutral + bad)} />
      <Statistic text="Positive" value ={(good / (good + neutral + bad)) * 100} />
    </div>
  )
}

const Statistic = ({text, value}) => {
  return  <p>{text}  {value} </p>
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback </h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
export default App