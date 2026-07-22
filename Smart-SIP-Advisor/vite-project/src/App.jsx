import Header from './components/Header';
import InputForm from './components/InputForm';
import RecommendResults from './components/RecommendResults';
import SipResults from './components/SipResults';
import UserInput from './components/UserInput';
import Menu from './components/Menu';
import PopupModal from './components/PopupModal';
import MutualFundList from './components/MutualFundList';
import { recommendedFunds } from './fundsData';
import { onAuthStateChanged } from "firebase/auth";
import { calculateSipAmount } from './assets/calculation';
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import './App.css';
import { useState,useEffect } from 'react';
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
const [isLoginModalOpen,setIsLoginModal]=useState(false);
const [user,setUser]=useState(null);
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser({
        name: firebaseUser.displayName,
        photoUrl: firebaseUser.photoURL,
        email: firebaseUser.email,
      });
    } else {
      setUser(null);
    }
  });

  const interval = setInterval(() => {
    const expiry = localStorage.getItem("expiryTime");

    if (expiry && Date.now() > Number(expiry)) {
      signOut(auth)
        .then(() => {
          localStorage.removeItem("expiryTime");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, 30000);

  return () => {
    unsubscribe();
    clearInterval(interval);
  };
}, []);
function openLoginModal(){
    setIsLoginModal(true);
}
function closeLoginModal(){
setIsLoginModal(false);
}
function settingUser(name,photoUrl,email){
    setUser({
        name : name,
        photoUrl : photoUrl,
        email : email
    })
    const expiryTime = Date.now() + 15 * 60 * 1000;
    localStorage.setItem("expiryTime",expiryTime);
}
   return (
    <>
     <Header user={user}
     openLoginModal={openLoginModal} 
     />
        {isLoginModalOpen && 
          <PopupModal closeLoginModal={closeLoginModal}
           settingUser={settingUser}/>}
     <InputForm userInput={userInput}
     onChange={onChange} onclick={onclick} /> 
      {showResult && <RecommendResults userInput={userInput}/>}
      {showResult && (
        <div className="fund-cards">
       { recommendedFunds.map((fund)=>(
        <MutualFundList schemeCode={fund.schemeCode} 
        key={fund.schemeCode}/>))
       }
        </div>
        )}
      {showResult && <UserInput onChange={handleSipChange} userInput={sipInput} 
      onsipchange={onsipchange} userInput={finalSipInput}
      />}
      {showSipResult && <SipResults input={finalSipInput}/>}
    </>
  )
}

export default App
