const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
   {part1.name}
    <br></br>
   {part1.exercises}
   <br></br>
   {part2.name}
   <br></br>
   {part2.exercises}
    </div>
  )
}
export default App