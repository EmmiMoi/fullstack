import { useState } from 'react'



const Button = (props) => {
  console.log(props)
return (
  <button onClick={props.handleClick}>{props.text} </button>
)
}

//anekdootteja yht 7, taulukko
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const setToSelected = (newValue) => {
    setSelected(newValue)
  }

  const [points, setPoints] = useState([0,0,0,0,0,0,0]);//anekdoottien pisteet, taulukon alkio 0 vastaa ekan anekdootin saamia ääniä jne
  
  const setToPoints = (index) => {
      const copy = {...points}
      let arvo = copy[index]
      arvo +=1
      copy[index] = arvo
      setPoints(copy)
  }

  //let random = ;//random-luku, joka vastaa anekdoottia (0-6)
  
  //kopio taulukosta taulukon päivittämistä varten
  // const copy = [...points]
// kasvatetaan taulukon paikan 2 arvoa yhdellä
  //copy[2] += 1   
  

  return (
    <div>
      <h1>Päivän anekdootti</h1>
      {anecdotes[selected]}
      <br></br>
      Ääniä: {points[selected]}
      <br></br>
      <Button text= "Seuraava anekdootti" handleClick={() =>  setToSelected(Math.floor(Math.random() * anecdotes.length))}/>
    
      <Button text = "Äänestä!" handleClick = {() => setToPoints(selected) }/>
    </div>
  )
}

export default App
