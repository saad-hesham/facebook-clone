import Chats from "../../chatComponents/Chats"
import Home from "./Home"
import LeftSideBar from "./LeftSideBar"
function BodyPrent() {
    return (
        <div className="body-parent">
            <div className="row">
                <div className="col-lg-3 col-sm-1 col-md-2">
                    <LeftSideBar />
                </div>
                <div className="col-xl-6 col-sm-11 col-md-8 col-lg-6">
                    <div className="container" >
                        <Home />

                    </div>
                </div>
                <div className="col-xl-2 contact-section"  style={{marginTop:"1rem"}}>
                   <div>
                    <h5> Contacts</h5>
                   </div>
                   <div>
                    <Chats/>
                   </div>
                    
                </div>
            </div>
        </div>
    )
}
export default BodyPrent