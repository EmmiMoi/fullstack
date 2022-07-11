import Header from "./Header"
import Content from "./Content"



const Course = ({course}) => {
  console.log("Course propsit", course) //tulostaa oikein
    return (
        <div>
          <Header header = {course.name} /> 
          <Content content = {course.parts} />

      
    
        </div>
      )
    }

export default Course