import Header from './components/Header';
import InputForm from './components/InputForm';
import RecommendResults from './components/RecommendResults';
import SipResults from './components/SipResults';
import UserInput from './components/UserInput';
import Menu from './components/Menu';
import { calculateSipAmount } from './assets/calculation';
import './App.css';
import { useState } from 'react';
function App() {
 const [userInput,setUserInput]=useState({
    monthlySalary: "",
    age: "",
    gender: "",
    maritalStatus: "Single",
    isHealthInsurance: "No",
    healthInsuranceAmount: "",
    isLifeInsurance: "No",
    lifeInsuranceAmount: "",
    isEmi: "No",
    emiAmount: "",
    })
    function onChange(inputIndentifier,newValue){
        setUserInput((previousState)=>{
            return{
        ...previousState,
        [inputIndentifier]:newValue
            }
        })
    }
      const [showResult,setShowResults]= useState(false);
    function onclick(){
        setShowResults((previousState)=> !previousState)
    }
    const [showSipResult,setShowSipResults]= useState(false);
    function onsipchange(){
        setShowSipResults((previousState)=> !previousState)
    }
     const results = calculateSipAmount(userInput);
     const sipAmount = results.sipAmount;
    const[sipInput,setSipInput] = useState({
        monthlySipAmount : 0,
        expectedAnnualReturn : 12,
        duration : 5
    })
    function handleSipChange(inputIdentifier, newValue) {
  setSipInput((prev) => ({
    ...prev,
    [inputIdentifier]: newValue === "" ? "" : +newValue
  }));
}
    const isInputValid = userInput.duration>=1;
     function handleChange(inputIndentifier,newVaule){
        setUserInput((previousState)=>{
            return{
            ...previousState,
           [inputIndentifier]: newVaule === "" ? "": +newVaule
            }
        })
     }
     const finalSipInput = {
  ...sipInput,
  monthlySipAmount:
    sipInput.monthlySipAmount || results.sipAmount,
};
   return (
    <>
     <Header/>
     <InputForm userInput={userInput}
     onChange={onChange} onclick={onclick} />
      {showResult && <RecommendResults userInput={userInput}/>}
      {showResult && <UserInput onChange={handleSipChange} userInput={sipInput} 
      onsipchange={onsipchange} userInput={finalSipInput}
      />}
      {showResult && <SipResults input={finalSipInput}/>}
    </>
  )
}

export default App
