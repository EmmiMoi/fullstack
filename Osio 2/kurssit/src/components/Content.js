import Part from "./Part"


//renderöidään kurssin osat kokoelmana map-funktiolla
const Content = ({content}) => {
  console.log("Content-propsit", content) 

  //laskee yhteen
  let total = content.reduce((a,b) =>
  a+b.exercises,0)

  
  return (
    <div>
     <ul>
     {content.map(content => 
        <Part key={content.id} name={content.name} exercises={content.exercises} />
      )}
      </ul>

      <p> Total: {total}
        </p>


    </div>
  )  
}

  export default Content