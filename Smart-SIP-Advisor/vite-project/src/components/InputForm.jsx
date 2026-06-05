import { useState } from "react";
export default function InputForm(){
    const [isUserInput,setIsUserInput]=useState({
        isEmi:"No",
        isHealthInsurance:"No",
        isLifeInsurance:"No"
    })
    function onChange(inputIndentifier,newValue){
        setIsUserInput((previousState)=>{
            return{
        ...previousState,
        [inputIndentifier]:newValue
            }
        })
    }
    return(
        <>
        <section className="input-form">
             <div className="input-label">
                <p>
                    <label>Monthly Salary(INR) : </label>
                    <input type="number" required/>
                </p>
                <p>
                    <label>Age : </label>
                    <input type="number" required/>
                </p>
             </div>
             <div className="input-label">
                <p>
                    <label>Martial Status : </label>
                    <select>
                        <option value="">Single</option>
                        <option value="">Married</option>
                    </select>
                </p>
                 <p>
                    <label>Health Insurance : </label>
                    <select onChange={(event)=>{onChange("isHealthInsurance",event.target.value)}}>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </p>
                      {isUserInput.isHealthInsurance==="Yes" && 
                    <p> <label>Monthly Installment : </label>
                        <input type="number" />
                    </p>}
             </div>
             <div className="input-label">
                 <p>
                    <label>Life Insurance : </label>
                    <select onChange={(event)=>{onChange("isLifeInsurance",event.target.value)}}>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </p>
                           {isUserInput.isLifeInsurance==="Yes" && 
                    <p> <label>Monthly Installment : </label>
                        <input type="number" />
                    </p>   }
                     <p>
                    <label>EMI : </label>
                    <select onChange={(event)=>{onChange("isEmi",event.target.value)}}>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </p>
                      {isUserInput.isEmi==="Yes" && 
                    <p> <label>Monthly EMI Installment : </label>
                        <input type="number" />
                    </p>}
             </div>
             <button type="button">Recommend Monthly SIP Amount</button>
        </section>
        </>
    )
}