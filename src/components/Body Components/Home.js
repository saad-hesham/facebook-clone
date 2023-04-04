import user from "../../images/user.webp";
import story from "../../images/sunrise-1014712__340.jpg"
import story2 from "../../images/photo-1564291366952-4d6231c2e414.jfif"
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/Store";
import { useContext, useEffect, useRef, useState } from "react";
import ReactionsSection from "./ReactionsSection";
import like from "../../images/facebook-reactions-emoticons/png-16/like-16x16-1991059.png"
import love from "../../images/facebook-reactions-emoticons/png-16/love-16x16-1991064.png"
import haha from "../../images/facebook-reactions-emoticons/png-16/haha-16x16-1991060.png"

import yay from "../../images/facebook-reactions-emoticons/png-16/care-16x16-1991058.png"
import wow from "../../images/facebook-reactions-emoticons/png-16/wow-16x16-1991062.png"
import sad from "../../images/facebook-reactions-emoticons/png-16/sad-16x16-1991063.png"
import angry from "../../images/facebook-reactions-emoticons/png-16/angry-16x16-1991061.png"
import { AuthContext } from "../../context/AuthContext";
import Chat from "../../chatComponents/Chat"
import Sidebar from "../../chatComponents/Sidebar";



function Home() {
    const { currentUser } = useContext(AuthContext);

    const editSatate = useSelector((state) => state.editMenu);
    const text = useRef();
    const [more, setmore] = useState(true);
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("load", function () {
            if (text.current.clientHeight >= 150) {
                text.current.style.height = "150px";
                text.current.style.overflow = "hidden";

                setmore(true)
                setShow(true)
            }

        })
    });
    const changeState = () => {
        setmore(false)
        text.current.style.removeProperty("height");
        text.current.style.removeProperty("overflow");

    }

    const changeStateRev = () => {
        setmore(true)
        text.current.style.overflow = "hidden";
        text.current.style.height = "150px"


    }
    const post = useSelector((state) => state.posts);
    const posts = JSON.parse(localStorage.getItem("posts"));
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(actions.togglePosts())
    }

    return (
        <div className="home-contianer">
            <section className="stories">
                <div className="tools-shorts">
                    <div className="tool-block" >
                        <span><i class="fa-solid fa-box"></i></span>
                        <span>stories</span>
                    </div>

                    <div className="tool-block" >
                        <span>
                            <i class="fa-solid fa-clapperboard"></i>
                        </span>
                        <span>reels</span>
                    </div>

                    <div className="tool-block" >
                        <span><i class="fa-solid fa-video"></i></span>
                        <span>rooms</span>
                    </div>
                </div>
                <div className="stories-container">
                    <div className="story-block">
                        <div className="story-img">

                            <object data={currentUser.photoURL} type="image/png">
                                <img src={user} alt="" />
                            </object>
                            <p>create story</p>
                        </div>
                    </div>

                    <div className="story-block">
                        <div className="story-img">
                            <img src={story} alt="user image create story" />
                        </div>
                    </div>

                    <div className="story-block">
                        <div className="story-img">
                            <img src={story2} alt="user image create story" />
                        </div>
                    </div>
                </div>

            </section>
            <section className="stories post-creator" onClick={toggle} >
                <div>
                <object data={currentUser.photoURL} type="image/png">
                                <img src={user} alt="user avatar" />
                            </object>
                    <input type="text" placeholder="What's on your mind, Saad?" />
                </div>
                <hr></hr>
                <div className="tools-shorts">
                    <div className="tool-block" >
                        <span style={{ color: "#f02849" }}><i class="fa-solid fa-video"></i></span>
                        <span>Live video</span>
                    </div>

                    <div className="tool-block" >
                        <span style={{ color: "#45bd62" }}>
                            <i class="fa-solid fa-image"></i>
                        </span>
                        <span>Photos/video</span>
                    </div>

                    <div className="tool-block" >
                        <span style={{ color: "#f7b928" }}>
                            <i class="fa-regular fa-face-smile"></i>
                        </span>
                        <span>Felling/Activities</span>
                    </div>
                </div>
            </section>

            {
                posts ? posts.reverse().map(function (x) {
                    return <section className="stories post">
                        <div className='name-contianer-creating-post' style={{ padding: "1rem 0rem", position: "relative" }}>
                            <div className='image-post-container'>
                            <object data={currentUser.photoURL} type="image/png">
                                <img src={user} alt="" />
                            </object>
                            </div>
                            <div className='name-state-contianer'>
                                <p>{currentUser.displayName}</p>
                                <div className='public-state-label' style={{ background: "none", margin: "-3px", width: "65px" }}>
                                    <span><i class="fa-solid fa-globe"></i></span>
                                    <span>
                                        public
                                    </span>
                                </div>

                            </div>
                            <div className="post-drop-menu">
                                <i class="fa-solid fa-ellipsis" onClick={() => { dispatch(actions.openToggleEdit(x.id)) }}></i>
                                {x.edit ?
                                    <div onMouseLeave={() => { dispatch(actions.openToggleEdit(x.id)) }}>
                                        <ul>
                                            <li onClick={() => { dispatch(actions.deletePost(x.id)) }}>Delete Post</li>
                                            <li onClick={() => { dispatch(actions.openEdit(x.id)) }}>Edit Post</li>
                                        </ul>
                                    </div>
                                    : null}

                            </div>

                        </div>
                        <div className="post-content">
                            <p ref={text}>{x.content}  </p>
                            {show ? <div>
                                {more ? <span style={{ cursor: "pointer" }} className="see-span" onClick={changeState}>See more</span> : <span style={{ cursor: "pointer" }} className="see-span" onClick={changeStateRev}>See less</span>}
                            </div> : null}
                            <img src={x.img} />

                        </div>
                        <div style={{ paddingBottom: "17px", position: "relative" }}>
                            {x.palletStatue ? <div className={"reactions-pallet"} onMouseLeave={() => { dispatch(actions.disactivePallet(x.id)) }}>

                                <div className="reactions-block like" onClick={() => { dispatch(actions.setReact({ id: x.id, react: like, word: "like" })) }}>
                                    <div>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="reactions-block heart" onClick={() => { dispatch(actions.setReact({ id: x.id, react: love, word: "love" })) }}>
                                    <div>

                                    </div>
                                </div>
                                <div className="reactions-block care" onClick={() => { dispatch(actions.setReact({ id: x.id, react: haha, word: "haha" })) }}>
                                    <div>
                                        <span className="eye"></span>
                                        <span className="eye2"></span>
                                        <span className="fixer"></span>
                                        <span className="mouth"></span>
                                        <span className="fixer2"></span>

                                    </div>
                                </div>
                                <div className="reactions-block yay" onClick={() => { dispatch(actions.setReact({ id: x.id, react: yay, word: "yay" })) }}>
                                    <div>
                                        <span className="left-eye"></span>
                                        <span className="right-eye"></span>
                                        <span className="yay-mouth"></span>
                                    </div>
                                </div>
                                <div className="reactions-block wow" onClick={() => { dispatch(actions.setReact({ id: x.id, react: wow, word: "wow" })) }}>
                                    <div>
                                        <span className="wow-left-eye"></span>
                                        <span className="wow-right-eye"></span>
                                        <span className="wow-mouth"></span>
                                        <span className="wow-bor"></span>
                                        <span className="wow-bor-right"></span>
                                    </div>
                                </div>
                                <div className="reactions-block sad" onClick={() => { dispatch(actions.setReact({ id: x.id, react: sad, word: "sad" })) }}>
                                    <svg>
                                        <circle cx="11" cy="15" r="3"></circle>
                                        <circle cx="27" cy="15" r="3"></circle>
                                        <circle cx="0" cy="37" r="7" className="mouth"></circle>
                                        <circle cx="12" cy="12" r="5" className="borrow"></circle>
                                        <circle cx="15" cy="18" r="5" className="borrow-2"></circle>
                                    </svg>

                                </div>
                                <div className="reactions-block angry" onClick={() => { dispatch(actions.setReact({ id: x.id, react: angry, word: "angry" })) }}>

                                    <div>

                                        <svg>
                                            <circle cx="11" cy="20" r="3"></circle>
                                            <circle cx="27" cy="20" r="3"></circle>
                                            <circle cx="27" cy="10" r="10" className="angry-bor"></circle>
                                            <circle cx="17" cy="10" r="10" className="angry-bor-two"></circle>
                                        </svg>
                                        <div className="angry-mouth"></div>
                                    </div>

                                </div>
                            </div> : null}


                            <div className="reacts-count" style={{ margin: ".5rem .3rem .5rem .3rem   " }}>
                                <img src={x.react} /><span style={{ fontSize: "12px", margin: "3px", marginBottom: "7px" }}>1</span>
                            </div>
                            <div className="react-options">
                                <span className={x.word + "-react"} onMouseEnter={() => { dispatch(actions.activePallet(x.id)) }}>
                                    <img src={x.react} style={{ margin: "3px" }} />
                                    {x.word}
                                </span>
                                <span>
                                    <i class="fa-solid fa-comment"></i>
                                    comment
                                </span>
                                <span>
                                    <i class="fa-solid fa-share"></i>
                                    share
                                </span>
                            </div>
                        </div>
                    </section>
                }) : null
            }
    
           
        </div>

    )
}
export default Home 