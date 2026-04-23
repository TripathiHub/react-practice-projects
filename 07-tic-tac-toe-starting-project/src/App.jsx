import Player from "./Components/Player.jsx"
function App() {
  return (
         <main>
          <div id="game-container">
            <ol id="players">
              <Player name="Player 1" playerSymbol="O"/>
              <Player name="Player 2" playerSymbol="X"/>
            </ol>
          </div>
         </main>
  )
}

export default App
