import { useState } from "react";
import Player from "./Components/Player.jsx";
import Log from "./Components/Log.jsx";
import GameBoard from "./Components/GameBorad.jsx";
function deriveActivePlayer(gameTurns){
  let setActivePlayer="O";
  if(gameTurns.length>0 && gameTurns[0].player==="O"){
    setActivePlayer="X";
  };
  return setActivePlayer;
}
function App() {
  const [gameTurns,setGameTurns]=useState([]);
   let activePlayer= deriveActivePlayer(gameTurns);
//  const [activePlayer,setActivePlayer]=useState("O");
   function handleActivePlayer(rowIndex,colIndex){
    setGameTurns((prevTurn)=>{
      let playerTurn = deriveActivePlayer(prevTurn);
      let updatedTurns = [{square:{row:rowIndex,col:colIndex},player:playerTurn},...prevTurn];
      return updatedTurns;
    });
   }
  return (
         <main>
          <div id="game-container">
            <ol id="players" className="highlight-player">
              <Player name="Player 1" playerSymbol="O" isActive={activePlayer==="O"}/>
              <Player name="Player 2" playerSymbol="X" isActive={activePlayer==="X"}/>
            </ol>
             <GameBoard onSelected={handleActivePlayer} turns={gameTurns}/>
          </div>
          <Log turns={gameTurns}/>
         </main>
  )
}

export default App
