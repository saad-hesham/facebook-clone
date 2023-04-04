import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/Store";





function Display() {
    const ref = useRef();
    const element = ref.current;



    const dispatch = useDispatch()

    const toggle = () => {
        const element = ref.current;
        element.classList.add("slideback");
        setTimeout(() => {
            dispatch(actions.display())

        }, 100);
    }
    const toggleMode = () => {
        dispatch(actions.togglemode())

    }
    const toggleModes = () => {
        dispatch(actions.toggleModeReverse())

    }
    const modeState = useSelector((state) => state.mode);
    return (
        <div className="details-setting" ref={ref}>

            <header onClick={toggle}>
                <span >
                    <i class="fa-solid fa-arrow-left" ></i>
                </span>
                <h1>Display & accessibility</h1>
            </header>

            <div className="block settings-privacy">
                <div>
                    <span><i class="fa-solid fa-moon"></i></span>
                    <span>Dark mode</span>
                </div>
                <p>Adjust the appearance of Facebook to reduce glare and give your eyes a break.</p>
                <form>
                    <div onClick={toggleModes}>
                        <label>off</label>
                        <input name="mode" type="radio"  id="rad1" checked={modeState == true} />
                    </div>
                    <div onClick={toggleMode}>
                        <label>on</label>
                        <input name="mode" type="radio"  id="rad2" checked={modeState == false} />
                    </div>
                </form>

            </div>
            {/* {-------------------------------------------------------------} */}
            <div className="block display-block">
                <div>
                    <span><i class="fa-solid fa-font"></i></span>
                    <span>Compact mode</span>
                </div>
                <p>Make your font size smaller so that more content can fit on the screen.</p>
                <form>
                    <div>
                        <label>off</label>
                        <input type="radio" name="mode" />
                    </div>
                    <div>
                        <label>on</label>
                        <input type="radio" name="mode" />
                    </div>
                </form>


                {/* {-------------------------------------------------------------} */}


            </div>


        </div>
    )
}
export default Display