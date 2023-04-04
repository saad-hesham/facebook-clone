import { useSelector } from "react-redux";
import NotBlock from "./NotBlock";
function Notifications() {
    const notArray = useSelector((state) => state.notiArray)
    return (
        <div className="setting-section">
            <div className="notifications ">

                <header>
                    <h1>Notifications</h1>
                    <span>All</span>
                    <span>unread</span>
                </header>
                {notArray.map(function (x) {
                    return (<NotBlock
                        pragraph={x.para}
                        img={x.img}
                        react={x.react}
                        time={x.time}
                    />)
                })}
            </div>





        </div>

    )
}
export default Notifications