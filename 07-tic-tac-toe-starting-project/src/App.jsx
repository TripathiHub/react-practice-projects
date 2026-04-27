import { useState } from "react";
import Player from "./Components/Player.jsx";
import Log from "./Components/Log.jsx";
import GameBoard from "./Components/GameBorad.jsx";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS.js";
const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
function deriveActivePlayer(gameTurns){
  let setActivePlayer="O";
  if(gameTurns.length>0 && gameTurns[0].player==="O"){
    setActivePlayer="X";
  };
  return setActivePlayer;
}
function App() {
  const [gameTurns,setGameTurns]=useState([]);
    let winner;
    let gameBoard=initialGameBoard;
    for(const turn of gameTurns){
        const {square,player} = turn;
        const {row,col}=square;
        gameBoard[row][col]=player;
    }
   let activePlayer= deriveActivePlayer(gameTurns);
   for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol =gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner = firstSquareSymbol;
      console.log(winner);
    }
   }
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
            {winner && <p>{winner} wins</p>}
             <GameBoard onSelected={handleActivePlayer} board={gameBoard}/>
          </div>
          <Log turns={gameTurns}/>
         </main>
  )
}

export default App
