
function NotBlock(props) {
    return (

        <section>
            <div className="img-not-container">
                <img src={props.img} alt="avatar image"/>
                <img src={props.react} alt="react image"/>
            </div>
            <div>
                <p>{props.pragraph}</p>
                <span>{props.time} ago</span>
            </div>
        </section>


    )
}
export default NotBlock