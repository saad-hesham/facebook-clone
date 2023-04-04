
function MessageBlock(props) {
    return (

        <section className="message-section">
            <div className="img-not-container">
                <img src={props.img} alt="avatar image"/>
            </div>
            <div>
                <h5>{props.name}</h5>
                <p>{props.pragraph}</p>
            </div>
        </section>


    )
}
export default MessageBlock