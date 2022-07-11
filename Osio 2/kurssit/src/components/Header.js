
//Hakf-stack application development, yläotsikko

const Header = ({header}) => {
  console.log("Header-props", header)
    return (
      <div>
        <h2>{header}</h2>
      </div>
    )
  }

  export default Header