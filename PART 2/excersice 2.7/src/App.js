import React, { useState } from 'react';

function App() {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    console.log(personObject) 
    const allNames = persons.map(person  => person.name)
    if(allNames.includes(newName)){alert(`${newName} is already added to phonebook`)
    return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const row_names = () => persons.map(person => 
    <p key={person.name}>{person.name}</p>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>{row_names()}</p>
    </div>
  )
}

export default App;