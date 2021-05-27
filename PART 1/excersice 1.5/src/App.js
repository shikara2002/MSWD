const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
  name: 'Fundamentals of React',
  exercises: 10,
  name1: 'Using props to pass data',
  exercises1: 7,
  name2: 'State of a component',
  exercises2: 14
}
return (
  <div>
 {part1.name}
  <br></br>
 {part1.exercises}
 </div>
)
}
export default App