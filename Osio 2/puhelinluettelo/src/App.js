
import { useState, useEffect } from 'react'
import personService from './services/persons'
import PersonForm from './components/PersonForm'
import Headers from './components/Headers'
import Persons from './components/Persons'
import Errormessage from './components/Errormessage'
import Message from './components/Message'


  const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [message, setMessage] = useState(null)
  const [okmessage, setOkmessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
        .then(intitialPersons => {
          setPersons(intitialPersons)
        })
      }, [])

  
  //uuden nimen lisäys ja
  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newPhone
    } 
    console.log("uusi nimi on: ", newName)
    
    //tarkastus onko nimi jo luettelossa, jos joo, niin ilmoitetaan.
    if (persons.find(person => person.name === newName)){
      console.log("Löytyi: ", newName)
      if (window.confirm(`${newName} on jo puhelinluettelossa, korvataanko numero uudella numerolla?`)){
        console.log("painoit ok")
        
        const person= persons.find(p=> p.name === newName)
        const changedNumber ={...person, number: newPhone}

        personService
          .update((person.id), changedNumber)
          .then (returnedPerson => {
            setPersons(persons.map(p=> p.id !== person.id ? p : returnedPerson))
            setNewName('')
            setNewPhone('')
        })
        setOkmessage('Henkilön ' + personObject.name +' puhelinnumero päivitetty onnistuneesti.')
        setTimeout(() => {
        setOkmessage(null)
      }, 5000)

      }
    }
    else {
      //lisätään personObject taulukkoon/palvelimelle
    personService
      .create(personObject) 
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
        })
        setOkmessage('Lisätty henkilö ' + personObject.name)
        setTimeout(() => {
        setOkmessage(null)
      }, 5000)
    }
    
  }

  //henkilön poistaminen
  const deletePerson = (id) => {
    const person = persons.find(p=> p.id ===id)
    if (window.confirm(`Haluatko varmasti poistaa henkilön ` + person.name +' luettelosta?')){
      console.log("painoit ok")
    
    //poistetaan palvelimelta ja listalta
    personService
      .remove(id)
    //poistetaan renderöidyltä listalta/estetään näkymästä käyttäjälle
      .then(setPersons(persons.filter(p => p.id !== id)))
     
    
    .catch(error => {
      setMessage('Yhteystieto ' + person.name+ ' on jo poistettu serveriltä')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      setPersons(persons.filter(p => p.id !== id))
    })
     setOkmessage('Poistettu henkilö ' + person.name)
        setTimeout(() => {
        setOkmessage(null)
      }, 5000)
  }
  }

  //tapahtumankäsittelijä uudelle nimelle
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }
  //tapahtumankäsittelijä uudelle numerolle
  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }


  return (
    <div>
      <Headers />
     
      <Errormessage message = {message} />
      <Message message = {okmessage} />
      <PersonForm 
        newName={newName} 
        newPhone={newPhone} 
        handlePersonChange={handlePersonChange} 
        addName = {addName} 
        handlePhoneChange = {handlePhoneChange}/>
      <h2>Numerot:</h2>
      <Persons
        persons={persons}
        deletePerson={deletePerson}
        />
    </div>
  )
}

export default App