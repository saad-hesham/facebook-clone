import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import user from "../../images/user.webp";


function Profile() {
    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <div className="profile">
                <span>   <object data={currentUser.photoURL} type="image/png">
                                <img src={user} alt="user avatar" />
                            </object></span>
                <span style={{textTransform:"capitalize"}}>{currentUser.displayName}</span>
            </div>
            <hr></hr>
            <div className="see">
                see all profiles
            </div>
        </div>
    )
}
export default Profile