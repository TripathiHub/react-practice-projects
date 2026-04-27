// const initialGameBoard=[
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
// ]
export default function GameBoard({onSelected,board}){
    // let gameBoard=initialGameBoard;
    // for(const turn of turns){
    //     const {square,player} = turn;
    //     const {row,col}=square;
    //     gameBoard[row][col]=player;
    // }
    //  const [gameBoard,setGameBoard]= useState(initialGameBoard);
    //  function handleGameBoard(rowIndex,colIndex){
    //      setGameBoard((previousGameBoard)=>{
    //          const updatedGameBoard = [...previousGameBoard.map((col)=> [...col])];
    //          updatedGameBoard[rowIndex][colIndex]=activeSymbol;
    //          return updatedGameBoard;
    //      });
    //      onSelected();
    //  }
    return(
        <>
    <ol id="game-board">
            {board.map((row,rowIndex) => 
        <li key={rowIndex} >
            <ol>
                {row.map((playerSymbol,colIndex)=>
                <li key={colIndex}>
                    <button onClick={()=>onSelected(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li> )}
    </ol>
        </>
    )
}