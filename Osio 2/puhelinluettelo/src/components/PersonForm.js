 //Uuden henkilön lisäävä komponentti
 const PersonForm = ({newName, newPhone, handlePersonChange, handlePhoneChange, addName}) => {
    //console.log("Person form-props: ", newName, newPhone)
    return(
      <form onSubmit={addName}>
        <div>
          Nimi: <input value={newName}
          onChange = {handlePersonChange} />
        </div>
        <div>
          Numero: <input value={newPhone}
          onChange = {handlePhoneChange}
          />
        </div>
        <div>
          <button type="submit">Lisää</button>
        </div>
      </form>
  
    )
  }
  export default PersonForm