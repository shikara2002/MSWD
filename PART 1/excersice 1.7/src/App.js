import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
  <br></br>
 
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      
       
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
       
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
     

      
      <br>
      </br>
      
      <h1>statistics</h1>
    <tr>
     <td> <p>good {good}</p></td>
      </tr>
      <tr>
      <td><p>neutral {neutral}</p></td>
      </tr>
      <tr>
      <td><p>bad {bad}</p> </td>
      </tr>
      <tr>
      <td><p>all {good+neutral+bad}</p>   </td>
      </tr>
      <tr>
      <td><p>avg {(good-bad)/(good+neutral+bad)}
      </p></td>
      </tr>
      <tr>
      <td><p>positive{(good)/(good+neutral+bad)*100 }
       </p></td>
      </tr>
      <p> </p>
    </div>
  )
}

export default App