import { useState } from "react";
import Player from "./Components/Player.jsx";
import Log from "./Components/Log.jsx";
import GameBoard from "./Components/GameBorad.jsx";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS.js";
import GameOver from "./Components/GameOver.jsx";
const INITIAL_GAME_BOARD=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
const PLAYERS ={
  O : "player 1",
  X : "player 2"
}
function deriveWinner(gameBoard,players){
    let winner;
    for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol =gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner = players[firstSquareSymbol];
    }
   }
   return winner;
}
function deriveGameBoard(gameTurns){
   let gameBoard=[...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])];
    for(const turn of gameTurns){
        const {square,player} = turn;
        const {row,col}=square;
        gameBoard[row][col]=player;
    }
    return gameBoard;
}
function deriveActivePlayer(gameTurns){
   let setActivePlayer="O";
    if(gameTurns.length>0 && gameTurns[0].player==="O"){
    setActivePlayer="X";
    };
  return setActivePlayer;
}
function App() {
   const [players,setPlayers]=useState(PLAYERS);
   const [gameTurns,setGameTurns]=useState([]);
   const gameBoard= deriveGameBoard(gameTurns);
   const activePlayer= deriveActivePlayer(gameTurns);
   const winner = deriveWinner(gameBoard,players);
   const hasDraw = gameTurns.length===9 && !winner;
//  const [activePlayer,setActivePlayer]=useState("O");
   function handleActivePlayer(rowIndex,colIndex){
    setGameTurns((prevTurn)=>{
      let playerTurn = deriveActivePlayer(prevTurn);
      let updatedTurns = [{square:{row:rowIndex,col:colIndex},player:playerTurn},...prevTurn];
      return updatedTurns;
    });
   }
   function handleRemacth(){
     setGameTurns([]);
   }
   function handlePlayerNameChange(symbol,newName){
     setPlayers((prevPlayer)=> {
      return{
        ...prevPlayer,
        [symbol] : newName
      };
     });
   }
  return (
         <main>
          <div id="game-container">
            <ol id="players" className="highlight-player">
              <Player name="Player 1" playerSymbol="O" 
              isActive={activePlayer==="O"} playerChange={handlePlayerNameChange}/>
              <Player name="Player 2" playerSymbol="X" 
              isActive={activePlayer==="X"} playerChange={handlePlayerNameChange}/>
            </ol>
              { (winner || hasDraw) && <GameOver winner={winner} Rematch={handleRemacth}/>}
             <GameBoard onSelected={handleActivePlayer} board={gameBoard}/>
          </div>
          <Log turns={gameTurns}/>
         </main>
  )
}

export default App
