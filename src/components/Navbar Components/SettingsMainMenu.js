import { useDispatch, useSelector } from "react-redux";

import { actions } from "../redux/Store";
import { useContext, useRef } from "react";
import Profile from "./Profile";
import { AuthContext } from "../../context/AuthContext";
import {signOut} from "firebase/auth"
import { auth } from "../../firebase";
function MainSettings() {
    const {currentUser} = useContext(AuthContext);

    const ref = useRef();
    const dispatch = useDispatch();
    const toggle = () => {
        const element = ref.current;
        element.classList.add("slideLeft");
        setTimeout(() => {
            dispatch(actions.toggleSettingDetails())

        }, 200);
    }

    const getelement = () => {


    };
    const togglehelp = () => {
        const element = ref.current;
        element.classList.add("slideLeft");
        setTimeout(() => {
            dispatch(actions.togglehelp())

        }, 200);
    }
    const toggleDisplay = () => {
        const element = ref.current;
        element.classList.add("slideLeft");
        setTimeout(() => {
            dispatch(actions.display())

        }, 200);
    }
    return (
        <div ref={ref} className="parent-proflie">
            <Profile />

            <div className="profile-settings">
                <div className="block settings-privacy" onClick={toggle}>
                    <div onClick={getelement}>
                        <span><i class="fa-solid fa-gear"></i></span>
                        <span>Settings & privacy</span>
                        <span>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                        </span>
                    </div>


                </div>
                {/* ---------------------------------------------------------------------------------*/}
                <div className="block settings-privacy" onClick={togglehelp}>
                    <div>
                        <span><i class="fa-solid fa-circle-question"></i></span>
                        <span>Help & Support</span>
                        <span>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------------------*/}

                <div className="block settings-privacy" onClick={toggleDisplay}>
                    <div>
                        <span><i class="fa-solid fa-moon"></i></span>
                        <span>Display & accessibility</span>
                        <span>
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                </div>
                {/* ---------------------------------------------------------------------------------*/}

                <div className="block settings-privacy">
                    <div>
                        <span><i class="fa-solid fa-circle-info"></i></span>
                        <span>info</span>
                        <span>
                        </span>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------------------*/}

                <div className="block settings-privacy" onClick={()=>signOut(auth)}>
                    <div>
                        <span><i class="fa-solid fa-right-from-bracket"></i></span>
                        <span >Log Out</span>
                        <span>
                        </span>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default MainSettings