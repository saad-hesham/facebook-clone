import { useSelector } from "react-redux"
import like from "../../images/facebook-reactions-emoticons/png-16/like-16x16-1991059.png"
function ReactionsSection(){
   
    return(
        <div style={{paddingBottom:"17px",position:"relative"}}>
            <div className="reactions-pallet">

            <div className="reactions-block like">
                <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
            </div>
            <div className="reactions-block heart">
            <div>
                
            </div>
            </div>
            <div className="reactions-block care">
                <div>
                <span className="eye"></span>
                <span className="eye2"></span>
                    <span className="fixer"></span>
                    <span className="mouth"></span>
                    <span className="fixer2"></span>
                 
                </div>
            </div>
            <div className="reactions-block yay">
                <div>
            <span className="left-eye"></span>
            <span className="right-eye"></span>
            <span className="yay-mouth"></span>
            </div>
            </div>
            <div className="reactions-block wow">
                <div>
            <span className="wow-left-eye"></span>
            <span className="wow-right-eye"></span>
            <span className="wow-mouth"></span>
            <span className="wow-bor"></span>
            <span className="wow-bor-right"></span>
            </div>
            </div>
            <div className="reactions-block sad">
                <svg>
                <circle  cx="11" cy="15" r="3"></circle>
                <circle  cx="27" cy="15" r="3"></circle>
                <circle  cx="0" cy="37" r="7" className="mouth"></circle>
                <circle  cx="12" cy="12" r="5" className="borrow"></circle>
                <circle  cx="15" cy="18" r="5" className="borrow-2"></circle>
                </svg>
           
            </div>
            <div className="reactions-block angry">
         
<div>

            <svg>
            <circle  cx="11" cy="20" r="3"></circle>
            <circle  cx="27" cy="20" r="3"></circle>
            <circle  cx="27" cy="10" r="10" className="angry-bor"></circle>
            <circle  cx="17" cy="10" r="10" className="angry-bor-two"></circle>
                </svg>
                <div className="angry-mouth"></div>
                </div>

            </div>
            </div>
            <div className="reacts-count" style={{margin:".5rem .3rem .5rem .3rem   "}}>
                <img src={like}/>
            </div>
            <div className="react-options">
            <span>
            <i class="fa-solid fa-thumbs-up"></i>
                like
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
    )
}
export default ReactionsSection