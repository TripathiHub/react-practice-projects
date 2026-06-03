import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";
function App() {
    const[userInput,setUserInput] = useState({
        initialInvestment : 1000,
        annualInvestment : 12000,
        expectedReturn : 7,
        duration : 10
    })
     function handleChange(inputIndentifier,newVaule){
        setUserInput((previousState)=>{
            return{
            ...previousState,
           [inputIndentifier]:newVaule,
            }
        })
     }
  return (
    <>
     <Header/>
     <UserInput onChange={handleChange} userInput={userInput}/>
     <Results input={userInput}/>
    </>
  )
}

export default App
