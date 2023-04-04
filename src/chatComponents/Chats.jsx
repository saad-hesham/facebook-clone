import { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import user from "../images/user.webp"
import { useDispatch } from "react-redux";
import { actions } from "../components/redux/Store";
const Chats = () => {
    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
    const reduxDispatch = useDispatch()

    
    useEffect(() => {
        const getChats = () => {
          const unsub = onSnapshot(doc(db, "usersChat", currentUser.uid), (doc) => {
            setChats(doc.data());
          });
    
          return () => {
            unsub();
          };
        };
        currentUser.uid && getChats();
      }, [currentUser.uid]);
      const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
        reduxDispatch(actions.toggleChat())
        
      };
      
    return (
      <section className="messages-continer">
             {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="message-block"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >

          <object data={chat[1].userInfo.photoURL} type="image/png">
                                <img src={user} alt="" />
                            </object>

          <div className="userChatInfo">
            <h5>{chat[1].userInfo.displayName}</h5>
          </div>
        </div>
      ))}
        </section>

     
      
  

    )
}
export default Chats