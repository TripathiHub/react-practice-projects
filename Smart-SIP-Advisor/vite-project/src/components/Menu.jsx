import { useState } from "react";
export default function Menu(){
    const [showMenu,setShowMenu]=useState(false);
    function handleClick(){
        setShowMenu(!showMenu);
    }
    return(
        <>
       <button className="menu-btn" onClick={()=> handleClick()}>
        &#9776;
       </button>
       {
        showMenu && (
        <div className="sidebar">
             <ul>
            <li>Home</li>
            <li>SIP Calculator</li>
            <li>FD Calculator</li>
            <li>About</li>
          </ul>
        </div>
        )
       }
        </>
    )
}