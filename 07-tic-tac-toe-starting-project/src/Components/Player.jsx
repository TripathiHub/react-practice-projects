import { useState } from "react"
export default function Player({name,playerSymbol}){
    const [playerName,setPLayerName]= useState(name);
    const [isEditing,setIsEditing]= useState(false);
    let content =  <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";
    function handleClick(){
           setIsEditing((editing)=> !editing);
       }
       function handleChange(event){
         setPLayerName(event.target.value);
       }
       if(isEditing){
        content = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption="Save";
       }
    return(
        <>       
        <li>
            <span className="player">
             {content}
            <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button type="button" onClick={handleClick}>{btnCaption}</button>
        </li>
        </>
    )
}