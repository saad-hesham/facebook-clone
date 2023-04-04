import { useEffect, useRef, useState } from "react"
import user from "../../images/user.webp"
import ReactionsSection from "./ReactionsSection";

function Post(props){
    const text = useRef();
    const [more,setmore] =useState(true);
    const [show,setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("load",function(){
          if(text.current.clientHeight>=150){
            console.log("good")
            text.current.style.height = "150px";
            text.current.style.overflow = "hidden";

            setmore(true)
            setShow(true)
          }
      
        })
      });
   const changeState = ()=>{
      setmore(false)
      text.current.style.removeProperty("height");
      text.current.style.removeProperty("overflow");

      }
     
    const changeStateRev = ()=>{
          setmore(true)
        text.current.style.overflow="hidden";
         text.current.style.height="150px"
 
         
      }
    return(
        <section className="stories post">
              <div className='name-contianer-creating-post' style={{padding: "1rem 0rem"}}>
        <div className='image-post-container'>
        <object data={currentUser.photoURL} type="image/png">
                                <img src={user} alt="" />
                            </object>
        </div>
        <div className='name-state-contianer'>  
        <p>{currentUser.displayName}</p>
        <div className='public-state-label' style={{background:"none",margin:"-3px",width:"65px"}}>
       <span><i class="fa-solid fa-globe"></i></span>
        <span>
          public
        </span>
        </div>
   
        </div>
      </div>
      <div className="post-content">
            <p ref={text}>{props.content}  </p>
            {show ? <div>
            {more ? <span  style={{cursor:"pointer"}} className="see-span" onClick={changeState}>See more</span> :<span  style={{cursor:"pointer"}} className="see-span" onClick={changeStateRev}>See less</span>}
            </div>:null}
            <img src={props.image}/>

            </div>
          <ReactionsSection/>
        </section>
    )
}
export default Post