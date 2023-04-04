import React, { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/Store';
import user from "../../images/user.webp"
import like from "../../images/facebook-reactions-emoticons/png-16/like-16x16-1991059.png"
import { AuthContext } from '../../context/AuthContext';
function FormAddingBost() {



  useEffect(()=>{
   
      document.addEventListener("mousedown",handler)
  });

  const { currentUser } = useContext(AuthContext);
  const name = [];
  let length = 0;
  let slicedName = "";
  let finalName ="";


  for(let i = 0 ;i<=currentUser.displayName.length ; i++){
    if(currentUser.displayName[i]==" "){
      length = currentUser.displayName.indexOf(currentUser.displayName[i]);     //2
    }
  }
  for(let i =0 ;i< length ;i++){
    name.push(currentUser.displayName[i])
    slicedName = name.toString();
  }
  finalName = slicedName.replace(/,/g,'')
  const area = useRef()
  const form = useRef()
  const buttons = useRef()
  useEffect(()=>{
    let handler = (e)=>{
      area.current.focus()
    }
    form.current.addEventListener("mouseenter",handler)
});
let handler = (e)=>{
  if(!form.current.contains(e.target) &&!buttons.current.contains(e.target)){
      setTimeout(() => {
          dispatch(actions.togglePosts())

      }, 200);
      

      }
}
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState("");
  const posts = useSelector((state)=>state.posts)
  const dispatch = useDispatch();
  const addPost = ()=>{
    dispatch(actions.addpost({id:JSON.parse(localStorage.getItem("posts")).length,content:input,img:image,loading,react:like,palletStatue:false,word:"like",edit:false}))
  }
  let imageState = useSelector((state)=>state.image)
  const chngeImageState= ()=>{
    imageState = true;
  }
  const toggle = ()=>{
    dispatch(actions.togglePosts())
  }
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'faceboook')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dmnkrqlwo/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
    
  }


  
  return (
    <div className="adding-posts "ref={form}>

      <header ref={buttons}>
        <h1>create post</h1>
        <span onClick={toggle}><i class="fa-solid fa-xmark"></i></span>
        <hr></hr>
      </header>
      <div className='name-contianer-creating-post'>
        <div className='image-post-container'>
        <object data={currentUser.photoURL} type="image/png">
                                <img src={user} alt="" />
                            </object>
          </div>
        <div className='name-state-contianer'>  
        <p>{currentUser.displayName}</p>
        <div className='public-state-label'>
       <span><i class="fa-solid fa-globe"></i></span>
        <span>
          public
        </span>
        <span><i class="fa-solid fa-caret-down"></i></span>
        </div>
   
        </div>
      </div>
      <div>
      <textarea placeholder={"what is in your mind "+finalName} onChange={(e) => setInput(e.target.value)}  ref={area}/>
        </div>
        <div>
          <div className='add-photos-container'>
            <div>
            <span><i class="fa-solid fa-photo-film"></i></span>
            <div>add photos/videos</div>
            <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
         className="upload-image-button"
         onClick={chngeImageState}
         
      />
      { loading ? <h3>please wait..</h3>:<img src={image}/>}
      
            </div>
          </div>
        <button className='add-post-button' onClick={addPost}>Post</button>
        </div>
    </div>
  )
}

export default FormAddingBost

