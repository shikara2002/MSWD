const http = require('http')
const express = require('express')
const app = express()
let persons = [
    {
      id: 1,
      name: 'Arto Hellas',
      number: '040-123456'
    },
    {
      id: 2,
      name: 'Ada Lovelace', 
      number: '39-44-5323523'
    },
    {
      id: 3,
      name: 'Dan Abramov',
      number: '12-43-234345'
    },
    {
      id: 4,
      name: 'Mary Poppendieck', 
      number: '39-23-6423122' 
    }
  ]
  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
  app.get('/info', (request, response) => {
    const shikara = new Date(Date.now())
    response.json(`<p>phonebook has info of ${persons.length} people</p> <p>${shikara.toString()}</p>`) 
    
  })
  
  
  app.get('/api/persons/:id', (req, res) =>{
    const id = req.params.id
    const person =  persons.find(person => {return person.id == id})
    console.log(person)

    if(person){
        res.json(person)
    }
    else{
        res.status(404).end()
    }
})
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id != id)
  res.status(204).end()
})
const generateId = () =>{
  const maxID = persons.length > 0
  ? Math.max( ...persons.map(n => n.id))
  : 0
  return maxID +1
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log(body)

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  if (!body.number) {
      return response.status(400).json({ 
        error: 'number missing' 
      })
    }

  if(persons.some(person => person.name === body.name)){
      return response.status(400).json({ 
          error: 'name must be unique' 
        })

  }

  let person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(persons)
})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)


