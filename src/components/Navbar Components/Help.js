import { useRef } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/Store";


function Help() {
    const dispatch = useDispatch()
    const ref = useRef();

    const toggle = () => {
        const element = ref.current;
        element.classList.add("slideback");
        setTimeout(() => {
            dispatch(actions.togglehelp())

        }, 200);
    }

    return (
        <div className="details-setting" ref={ref}>
            <header onClick={toggle}>
                <span >
                    <i class="fa-solid fa-arrow-left" ></i>
                </span>
                <h1>Help & support</h1>
            </header>

            <div className="block settings-privacy ">
                <div>
                    <span><i class="fa-solid fa-circle-question"></i></span>
                    <span>Help Center</span>
                    <span>
                    </span>
                </div>
            </div>
            {/*---------------------------- */}
            <div className="block settings-privacy">
                <div>
                    <span><i class="fa-solid fa-envelope"></i></span>
                    <span>Support Inbox</span>
                    <span>
                    </span>
                </div>
            </div>
            {/*---------------------------- */}
            <div className="block settings-privacy">
                <div>
                    <span><i class="fa-solid fa-circle-exclamation"></i></span>
                    <span>Report a problem</span>
                    <span>
                    </span>
                </div>
            </div>
            {/*---------------------------- */}



        </div>
    )
}
export default Help