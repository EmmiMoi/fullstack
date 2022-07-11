import Course from "./Course"


const Courses = ({courses}) => {
    console.log("courses props", courses)

    return(
        <div>
            <h1>
                Web Development Curriculum
            </h1>
            <ul>
                {courses.map(courses => 
                <Course key={courses.id} course={courses} />
                )}
            </ul>
      </div>
    )

}
export default Courses