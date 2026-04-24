import { useState } from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBorad.jsx";
function App() {
  const [activePlayer,setActivePlayer]=useState("O");
   function handleActivePlayer(){
    setActivePlayer((prev)=> prev === "O" ? "X" : "O");
   }
  return (
         <main>
          <div id="game-container">
            <ol id="players" className="highlight-player">
              <Player name="Player 1" playerSymbol="O" isActive={activePlayer==="O"}/>
              <Player name="Player 2" playerSymbol="X" isActive={activePlayer==="X"}/>
            </ol>
             <GameBoard activeSymbol={activePlayer} onSelected={handleActivePlayer}/>
          </div>
         </main>
  )
}

export default App
