import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/Store";

function DetailsSettings() {
    const ref = useRef();
    const dispatch = useDispatch();
    const toggle = () => {
        const element = ref.current;
        element.classList.add("slideback");
        setTimeout(() => {
            dispatch(actions.toggleSettingDetails())

        }, 200);
    }


    return (
        <div className="details-setting" ref={ref}>
            <header>
                <span onClick={toggle}>
                    <i class="fa-solid fa-arrow-left"></i>
                </span>
                <h1>Settings & privacy</h1>
            </header>

            <div className="block settings-privacy">
                <div>
                    <span><i class="fa-solid fa-gear"></i></span>
                    <span>Settings</span>
                    <span>
                    </span>
                </div>
            </div>
            {/*---------------------------- */}
            <div className="block settings-privacy">
                <div>
                    <span><i class="fa-solid fa-house-lock"></i></span>
                    <span>privacy Checkup</span>
                    <span>
                    </span>
                </div>
            </div>
            {/*---------------------------- */}
            <div className="block settings-privacy">
                <div>
                    <span><i class="fa-solid fa-lock"></i></span>
                    <span>logout</span>
                    <span>
                    </span>
                </div>
            </div>
            {/*---------------------------- */}
            <div className="block settings-privacy">
                <div>
                    <span><i class="fa-solid fa-list"></i></span>
                    <span>logout</span>
                    <span>
                    </span>
                </div>
            </div>
            {/*---------------------------- */}
            <div className="block settings-privacy">
                <div>
                    <span><i class="fa-solid fa-bars-progress"></i></span>
                    <span>Feed</span>
                    <span>
                    </span>
                </div>
            </div>
            {/*---------------------------- */}
            <div className="block settings-privacy">
                <div>
                    <span><i class="fa-solid fa-globe"></i></span>
                    <span>Language</span>
                    <span>
                    </span>
                </div>
            </div>
            {/*---------------------------- */}
        </div>
    )
}
export default DetailsSettings