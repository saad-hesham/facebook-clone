import user from "../../images/user.webp";
import pixelArtLogo from "../../images/326787664_1152184748805611_2239723274803284052_n.jpg"
import gamers from "../../images/gamers.jpg"
import art from "../../images/art.jpg"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function LeftSideBar(){
    const { currentUser } = useContext(AuthContext);
    return(
        <div className="footer-ul-containert">
        <ul>
            <li>
                <span><i class="fa-solid fa-house"></i></span>
                <span className="group-lapel">home</span>
            </li>
            <li>
                <span>  <object data={currentUser.photoURL} type="image/png">
                                <img src={user} alt="" />
                            </object></span>
                <span className="group-lapel" style={{textTransform:"capitalize"}}>{currentUser.displayName}</span>
            </li>
            <hr></hr>
            <li>
                <span ><i class="fa-sharp fa-solid fa-desktop"></i></span>
                <span className="group-lapel">watch</span>

            </li>      <li>
                <span><i class="fa-solid fa-user-group"></i></span>
                <span className="group-lapel">friends</span>

            </li>      <li>
                <span><i class="fa-solid fa-shop"></i></span>
                <span className="group-lapel">marketplace</span>

            </li>      <li>
                <span><i class="fa-solid fa-gamepad"></i></span>
                <span className="group-lapel">gaming</span>
            </li>
            <hr></hr>
            <li>
                <span><img src={pixelArtLogo} alt="pixel art group image"/></span>
               <span className="group-lapel">pixel art +</span> 
            </li>
            <li>
            <span><img src={gamers} alt="gamers  group image"/></span>
                <span className="group-lapel">We Pretend We're Not Gamers</span>
            </li>
            <li>
            <span><img src={art} alt="art group image"/></span>
                <span className="group-lapel">A-ArtValia</span>
            </li>

            <hr></hr>
            <footer></footer>

        </ul>

    </div>
    )
}
export default LeftSideBar