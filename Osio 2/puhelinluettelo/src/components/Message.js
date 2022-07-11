const Message = ({message}) => {
    if (message === null) {
        return null
    }

    return (
    <div className="succesful"  >
        {message}
     </div>
      

    )
}
export default Message