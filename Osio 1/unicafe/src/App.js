
import {useState} from 'react'

const Header = (props) => 
  <h1>{props.header}</h1>
  
const Stat =(props) =>
  <h2>{props.header}</h2>

const Button = (props) => {
  //console.log(props) //tulostaa hyvä, neutraali ja huono
  //const {handleClick, text} = props
  return (
    <button onClick={props.handleClick}>{props.text}  </button>
  )
}


const StatisticLine = (props) => {
  return(
    
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>  
      </tr>
    
  )
}

//positive = good/sum
const Statistics = (props) => {
  if (props.clicks === 0)
    return (
    <div>
      Palautetta ei ole vielä annettu
    </div>
    )
  return (
    <div>
      <table> 
        <tbody>
          <StatisticLine  text="Hyvä" value = {props.good} />     
          <StatisticLine text="Neutraali" value = {props.neutral} />    
          <StatisticLine text="Huono" value = {props.bad} /> 
          <StatisticLine text="Keskiarvo" value = {props.average} />
          <StatisticLine text="Positiivisia" value = {props.positive} />
         </tbody>
      </table>
    </div>
  )
}

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)
  const [average, setAverage] = useState(0)
  const [clicks, setClicks] = useState(0);
  
  const header = 'Anna palautetta'
  const stat = 'Palaute tähän mennessä:'
  
  
  const setToGood = (newValue) => {
    setGood(newValue)
  }
  const setToNeutral = (newValue) => {
    setNeutral(newValue)
  }
  const setToBad = (newValue) => {
    setBad(newValue)
  }
  const setToSum = (newValue) => {
    setSum(newValue)
  }
  const setToAverage = (newAverage) => {
    setAverage(newAverage)
  }
  const setToClicks = (newValue) => {
    setClicks (newValue)
  }


  return (
    <div>
      <Header header={header} />
      <Button handleClick = {() => setToGood(good + 1) + setToSum (sum +1) + setToAverage(average + 1) + setToClicks(1)} text = 'Hyvä' /> 
      <Button handleClick = {() => setToNeutral(neutral + 1)+ setToSum (sum +1) + setToAverage(average) + setToClicks(1)} text = 'Neutraali' /> 
      <Button handleClick = {() => setToBad(bad + 1)+ setToSum (sum +1)+ setToAverage(average - 1) + + setToClicks(1)} text = 'Huono' /> 
  
      <Stat header={stat} />
     

      <Statistics clicks = {clicks} good = {good} neutral = {neutral} bad = {bad} 
      sum ={sum} average = {average/sum} positive = {good/sum * 100} />
    </div>
  )
}

export default App
