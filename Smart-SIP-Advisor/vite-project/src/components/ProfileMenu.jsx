import { signOut } from "firebase/auth";
import { auth } from "../firebase";
export default function ProfileMenu({photoUrl,name,email}){
    function logout() {
  signOut(auth).catch((error)=>console.error(error));
}
    return(
        <>
        <div className="profile-menu">
         <img src={photoUrl} alt="profile-photo" className="profile-menu-avatar"/>
         <span className="profile-menu-name">{name}</span>
         <p className="profile-menu-email">{email}</p>
         <button type="button" className="profile-menu-logout" onClick={logout}>Logout</button>
         </div>
        </>
    )
}