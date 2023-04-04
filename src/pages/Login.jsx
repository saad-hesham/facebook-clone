import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { auth } from "../firebase";

const Login = ()=>{

    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
        console.log("work")
      } catch (err) {
        setErr(true);
        console.log(err)
      }
    };
    return(
        <div className="form-container">
        <div className="form-wraper">
            <form onSubmit={handleSubmit}>
   
            <input type="email" placeholder="Email address or phone number"/>
            <input type="password" placeholder="Password"/>
           
            <button>sign In</button>
            </form>
            <p> <Link to="/register">Create Account</Link></p>
        </div>

            
        </div>
    )
}
export default Login