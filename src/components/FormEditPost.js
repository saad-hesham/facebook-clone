import { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import user from "../images/user.webp"
import { actions } from "./redux/Store"
import { AuthContext } from "../context/AuthContext";
function FormEditPost() {
  const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    const editInfo = useSelector((state)=>state.editedPost);
    const area = useRef()
    const [text,setText] = useState(editInfo.content);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
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
    <div className="adding-posts">

      <header>
        <h1>Edit post</h1>
        <span onClick={()=>{dispatch(actions.closeEdit())}}><i class="fa-solid fa-xmark"></i></span>
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
     
          <textarea placeholder="What's on your mind, Saad" ref={area} value={text} onChange={(e)=>{setText(e.target.value)}} />
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
      
         
      />
     { loading ? <h3>please wait..</h3>:<img src={editInfo.img}/>}
     { loading ? null:<img src={image}/>}
      
            </div>
          </div>
        <button className='add-post-button' onClick={()=>{
           
            {image==""?dispatch(actions.setEdit({id:editInfo.id,content:text,img:editInfo.img})): dispatch(actions.setEdit({id:editInfo.id,content:text,img:image}))}
        
        }}>Edit</button>
        </div>
    </div>
  )
}

export default FormEditPost

