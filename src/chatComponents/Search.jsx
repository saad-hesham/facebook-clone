import { useContext, useState } from "react"
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
const Search = ()=>{
    const [userName ,setUserName]=useState("");
    const [user ,setUser]=useState(null);
    const [Username ,setUsername]=useState(null);
    
    const [err ,seterr]=useState(false);
    const {currentUser}=useContext(AuthContext)
    const handleSearch = async () => {
        const q = query(
          collection(db, "users"),
          where("displayName", "==", userName)
        );
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      } catch (err) {
        seterr(true);
      }
    };
    const handleKey = (e)=>{
         handleSearch();
    };
    const handleSelect = async()=>{
      const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
        try{
          const res = await getDoc(doc(db, "chats", combinedId));

          if (!res.exists()) {
            await setDoc(doc(db, "chats", combinedId), { messages: [] });

            await updateDoc(doc(db, "usersChat", currentUser.uid), {
              [combinedId + ".userInfo"]: {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
              },
              [combinedId + ".date"]: serverTimestamp(),
            });


            await updateDoc(doc(db, "usersChat", user.uid), {
              [combinedId + ".userInfo"]: {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
              },
              [combinedId + ".date"]: serverTimestamp(),
            });

          }
        }catch(err){

        }
        setUser(null);
        setUsername("")

      }
    
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user" onChange={e=>setUserName(e.target.value)} onKeyDown={handleKey}/>
            </div>
            {err&&<span>user not found</span>}
            {user &&<div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt=""/>
                <div>
               <span>{user.displayName}</span>     
                </div>

            </div>
            }
        </div>
    )
}
export default Search