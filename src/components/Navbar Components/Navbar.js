import Logo from "../../images/Facebook_Logo_(2015)_light.svg";
import Logodark from "../../images/Facebook-Logo-font.jpg";
import user from "../../images/user.webp"

import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/Store";
import Settings from "./Settings";
import Notification from "./Notifications";
import Messages from "./Messages";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";


function Navbar() {
    const { currentUser } = useContext(AuthContext);
    let menu = useRef();
    let buttons = useRef();
    let navbar = useRef()
    useEffect(()=>{
        let handler = (e)=>{
            if(!menu.current.contains(e.target) &&!buttons.current.contains(e.target)){
                setTimeout(() => {
                    dispatch(actions.closeAll())
        
                }, 200);
                

                }
        }
        document.addEventListener("mousedown",handler)
    });
    const dispatch = useDispatch()
    const settingsState = useSelector((state) => state.settings);
    const notifcations = useSelector((state) => state.notifications);
    const messages = useSelector((state) => state.messages);
    const toggle = () => {
        dispatch(actions.toggleSetting())
    }
    const showNav = () => {
        document.querySelector(".navbar-parent").classList.add("active")
    }
    const hideNav = () => {
        document.querySelector(".navbar-parent").classList.remove("active")
    }
    const openNot = () => {
        dispatch(actions.openNot())
    }
    const openMessages = () => {
        dispatch(actions.openMessages())
    }

    return (
        <div className="navbar-parent" ref={navbar}>


            <div className="row">

                <div className="col-sm-3 col-md-2 logo conitaner">
                    <img src={Logo} width="120" className="logo" />
                    <img src={Logodark} width="140" className="dark-logo" />
                    <i class="fa-solid fa-magnifying-glass glass-icon" onClick={showNav}></i>
                </div>
                <div className="col-sm-5 col-md-8 search-bar-contianer" onDoubleClick={hideNav} >
                    <i class="fa-solid fa-magnifying-glass" ></i>
                    <input type="text" placeholder="Search Facebook"/>
                </div>

                {/*------------------------------ */}

                <div className="col-sm-4 col-md-2 tools conitaner">
                    <div className="navbar-items-container" ref={buttons}>
                        <span onClick={openMessages}><i class="fa-solid fa-message"></i></span>
                        <span onClick={openNot}><i class="fa-solid fa-bell"></i></span>
                        <span onClick={toggle} className="user-image">

                        <object data={currentUser.photoURL} type="image/png">
                                <img src={user} alt="user avatar" />
                            </object>
                        </span>

                    </div>

                </div>
                <div ref={menu}>
                {settingsState ? <Settings /> : null}
                {notifcations ? <Notification /> : null}
                {messages ? <Messages /> : null}
                </div>
            </div>

        </div>
    )
}
export default Navbar