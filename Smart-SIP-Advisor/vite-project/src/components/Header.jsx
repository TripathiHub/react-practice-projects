import Menu from "./Menu";
import logo from "../assets/image.png";
import ProfileMenu from "./ProfileMenu";
import { useState } from "react";

export default function Header({openLoginModal,user}) {
  const [isProfileClicked,setIsProfileClicked]=useState(false);
  function profileToggle(){
    setIsProfileClicked((prev)=>!prev);
  }
  return (
    <header>
      <nav className="navbar">
        <Menu />
        <div className="navbar-right">
         { user ? 
          <div className="user-profile">
           <div  className="profile-trigger" onClick={profileToggle} >
           <img src={user.photoUrl} alt="user-profile"/>
           <span>{user.name}</span>
           </div>
             {isProfileClicked && 
          <ProfileMenu photoUrl={user.photoUrl} name={user.name} email={user.email}/>}
             </div>
          : <button className="login-btn" onClick={openLoginModal}>👤</button>
         }
        </div>
      </nav>
      <div className="header-content">
        <img src={logo} alt="Logo of Smart SIP Advisor by HT" />
        <h1>Plan Your Investments Smarter</h1>
        <p className="subtitle">Get a personalized SIP recommendation</p>
      </div>
    </header>
  );
}