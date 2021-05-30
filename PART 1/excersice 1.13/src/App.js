import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 2, 1: 1, 2: 3, 3: 4, 4: 0, 5: 2 })

  const incrementPointHandler = () =>{
    const copy = { ...points }
    // increment the property 2 value by one
    copy[selected % props.anecdotes.length] += 1   
    console.log(copy)
    // save
    setPoints(copy);
  }

  

  return (
    <div>
      {props.anecdotes[selected % props.anecdotes.length]}
      <br></br>
      has {points[selected % props.anecdotes.length]} votes

      <br></br>
      <button onClick={incrementPointHandler}>vote</button>
      <button onClick={() => setSelected(selected+1)}> next anecdotes</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
export default App