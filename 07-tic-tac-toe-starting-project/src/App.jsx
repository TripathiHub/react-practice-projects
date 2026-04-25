import { useState } from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBorad.jsx";
function App() {
  const [gameTurns,setGameTurns]=useState([]);
  const [activePlayer,setActivePlayer]=useState("O");
   function handleActivePlayer(rowIndex,colIndex){
    setActivePlayer((prev)=> prev === "O" ? "X" : "O");
    setGameTurns((prevTurn)=>{
      let playerTurn="O";
      if( prevTurn.length>0 && prevTurn[0].player==="O"){
        playerTurn="X";
      }
      let updatedTurns = [{square:{row:rowIndex,col:colIndex},player:playerTurn},...prevTurn];
    });
    return updatedTurns;
   }
  return (
         <main>
          <div id="game-container">
            <ol id="players" className="highlight-player">
              <Player name="Player 1" playerSymbol="O" isActive={activePlayer==="O"}/>
              <Player name="Player 2" playerSymbol="X" isActive={activePlayer==="X"}/>
            </ol>
             <GameBoard onSelected={()=>handleActivePlayer} turns={gameTurns}/>
          </div>
         </main>
  )
}

export default App
