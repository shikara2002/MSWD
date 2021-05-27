import React from 'react'
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  

  return (
    <div>
    <h1>{courses[0].name}</h1>
    <p>{courses[0].parts[0].name}    {courses[0].parts[0].exercises}</p>
    <p>{courses[0].parts[1].name}    {courses[0].parts[1].exercises}</p>
    <p>{courses[0].parts[2].name}    {courses[0].parts[2].exercises}</p>
    <p>{courses[0].parts[3].name}    {courses[0].parts[3].exercises}</p>
    <p><strong>total of {courses[0].parts[0].exercises+courses[0].parts[1].exercises+courses[0].parts[2].exercises+courses[0].parts[3].exercises} exercises</strong></p>
    <h1>{courses[1].name}</h1>
    <p>{courses[1].parts[0].name}    {courses[1].parts[0].exercises}</p>
    <p>{courses[1].parts[1].name}    {courses[1].parts[1].exercises}</p>
    <p><strong>total of {courses[1].parts[0].exercises+courses[1].parts[1].exercises} excersices</strong></p>
    </div>
  )
}
export default App