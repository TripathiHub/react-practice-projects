import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBorad.jsx";
function App() {
  return (
         <main>
          <div id="game-container">
            <ol id="players" className="highlight-player">
              <Player name="Player 1" playerSymbol="O"/>
              <Player name="Player 2" playerSymbol="X"/>
            </ol>
             <GameBoard/>
          </div>
         </main>
  )
}

export default App
