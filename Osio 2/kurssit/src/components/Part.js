

const Part = ({name, exercises}) => {
  console.log("Part-propsit", name, exercises) 
    return (
      <div>
      <li>{name} , exercises: {exercises}</li>
      </div>
    )
  }

  export default Part