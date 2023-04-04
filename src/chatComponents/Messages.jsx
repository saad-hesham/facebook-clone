import React, { useContext, useEffect, useState } from "react"
import Message from "./Message"
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
const Messages = ()=>{
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);
    console.log(messages)


    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
          doc.exists() && setMessages(doc.data().messages);
        });
    
        return () => {
          unSub();
        };
      }, [data.chatId]);
    
      return (
        <div className="messages">
          {messages.map((m) => (
            <Message message={m} key={m.id} />
          ))}
        </div>
      );
}
export default Messages