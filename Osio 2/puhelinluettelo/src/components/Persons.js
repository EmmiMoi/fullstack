import Person from "./Person"

const Persons = ({persons,deletePerson}) => {
   
    //console.log("persons-propsit: ", persons)
  
    return(
      <div>
        <ul>
        {persons.map(person =>
          <Person 
          key={person.id}
          person = {person}
          deletePerson = {() => deletePerson(person.id)}
          />  
            )}
        </ul>
      </div>
    )
  }
  export default Persons