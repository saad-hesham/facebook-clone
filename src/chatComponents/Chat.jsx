import { useContext } from "react";
import user from "../images/user.webp"
import { AuthContext } from "../context/AuthContext";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import Chats from "./Chats";
import Messages from "../chatComponents/Messages";
import { useDispatch } from "react-redux";
import { actions } from "../components/redux/Store";


const Chat = ()=>{
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const dispatch = useDispatch();
   const handleDispatch = ()=>{
    dispatch(actions.toggleChat())
    }

    
    return(
        <div>
        <div className="chat-div-container">
            <div className="chat-header">
                <div>
                <div> <object data={data.user?.photoURL} type="image/png">
                                <img src={user} alt="" />
                            </object></div>
                <div>
                <span>{data.user?.displayName}</span>
                </div>
                    <span onClick={handleDispatch}>
                    <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>
       
            </div>
            <Input/>
            <Messages/>
        </div>
        <div>
          
            </div>
        </div>
    )
}
export default Chat