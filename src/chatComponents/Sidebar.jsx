import Navbar from "../chatComponents/Navbar"
import Search from "./Search"
import Chats from "./Chats"
import { ChatContext } from "../context/ChatContext"
const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <Chats/>

        </div>
    )
}
export default Sidebar