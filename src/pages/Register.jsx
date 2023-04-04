import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth,db,storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc ,doc} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = ()=>{
  const [err,seterr] = useState(false);
  const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const displayName =e.target[0].value
        const email =e.target[1].value
        const password =e.target[2].value
        const file =e.target[3].files[0]
        try{
    const res = await createUserWithEmailAndPassword(auth, email, password);

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(
  (error) => {
seterr(true)  
}, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,
      });
      await setDoc(doc(db,"users",res.user.uid),{
        uid:res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,
      });
      await setDoc(doc(db,"usersChat",res.user.uid),{})
      navigate("/")

      
    });
  }
);

        }catch(err){
seterr(true)
console.log(err)
        }

    }
    return(
        <div className="form-container">
        <div className="form-wraper">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="display name"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <input type="file" />
            <label htmlFor="file">
                <img src="" alt="" />
                <span style={{marginLeft:"12px"}}>Add Profile Picture</span>
                </label>
            <button >sign Up</button>
            {err && <span>somthing went wrong try diffrent Email or password</span>}
            </form>
            <p><Link to="/login">Login</Link></p>
        </div>

            
        </div>
    )
}
export default Register