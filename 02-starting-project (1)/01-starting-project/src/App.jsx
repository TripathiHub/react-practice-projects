import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";
function App() {
    const[userInput,setUserInput] = useState({
        monthlySipAmount : 5000,
        expectedAnnualReturn : 12,
        duration : 5
    })
    const isInputValid = userInput.duration>=1;
     function handleChange(inputIndentifier,newVaule){
        setUserInput((previousState)=>{
            return{
            ...previousState,
           [inputIndentifier]:+newVaule,
            }
        })
     }
  return (
    <>
     <Header/>
     <UserInput onChange={handleChange} userInput={userInput}/>
     {!isInputValid && <p className="center">
      Please enter valid duration</p>}
    { isInputValid && <Results input={userInput}/>}
    </>
  )
}

export default App
