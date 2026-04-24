import { useState } from "react";
const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard(){
     const [gameBoard,setGameBoard]= useState(initialGameBoard);
     function handleGameBoard(rowIndex,colIndex){
         setGameBoard((previousGameBoard)=>{
             const updatedGameBoard = [...previousGameBoard.map((col)=> [...col])];
             updatedGameBoard[rowIndex][colIndex]="X";
             return updatedGameBoard;
         })
     }
    return(
        <>
    <ol id="game-board">
            {gameBoard.map((row,rowIndex) => 
        <li key={rowIndex} >
            <ol>
                {row.map((playerSymbol,colIndex)=>
                <li key={colIndex}>
                    <button onClick={()=> handleGameBoard(rowIndex,colIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li> )}
    </ol>
        </>
    )
}