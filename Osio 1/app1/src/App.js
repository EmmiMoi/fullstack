// Emmi Moisio, Fullstack open osa 1
const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(course.parts);
  return (
    <div>
      <Header courseHeader = {course.name} />
      <Content courseparts = {course.parts} />
      <Total courseparts = {course.parts} />

    </div>
  )
}

//kurssin nimi
const Header = (props) => {
  return (
    <div>
      <h1>{props.courseHeader}</h1>
    </div>
  )
}

//part komponentti Content-komponenttia varten
const Part = (props) => {
  return (
    <div>
    <p>{props.part} ja krediittejä {props.exercise}</p>
    </div>
  )
}

//kurssin sisältö, Part-komponentista, jotka renderöi yhden osan nimen ja tehtävämäärän   
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part ={props.courseparts[0].name} exercise = {props.courseparts[0].exercises} />
      <Part part ={props.courseparts[1].name} exercise = {props.courseparts[1].exercises}  />
      <Part part ={props.courseparts[2].name} exercise = {props.courseparts[2].exercises}  />
     
    </div>
  )  
}

//total
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.courseparts[0].exercises + props.courseparts[1].exercises + props.courseparts[2].exercises }</p>
    </div>
  )
}



export default App

