import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = ()=>{
    const {currentUser} = useContext(AuthContext);

    // const {currentUser} = useContext(AuthContext)

    return(
        <div className="navbar">
            <span className="logo">React chat app</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/6615806/pexels-photo-6615806.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt =""/>
                <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>logout</button>
            </div>
        </div>
    )
}
export default Navbar