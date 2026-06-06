export default function InputForm({userInput,onChange,onclick}){
    return(
        <>
        <section className="input-form">
             <div className="input-label">
                <p>
                    <label>Monthly Salary(INR) : </label>
                    <input type="number" placeholder="Enter your salary" required 
                   value={userInput.monthlySalary} 
                   onChange={(event)=>onChange("monthlySalary",event.target.value)}/>
                </p>
                <p>
                    <label>Age : </label>
                    <input type="number" placeholder="Enter your age" required
                    value={userInput.age}
                    onChange={(event)=>onChange("age",event.target.value)}/>
                </p>
                <p>
                 <label>Gender :</label>
                   <span className="radio-group">
                   <input
                         type="radio"
                         id="male"
                         name="gender"
                         value="male"
                         checked={userInput.gender === "male"}
                         onChange={(event) =>
                         onChange("gender", event.target.value)
                         }
                         />
                         <label htmlFor="male">Male</label>
                         <input
                           type="radio"
                           id="female"
                           name="gender"
                           value="female"
                           checked={userInput.gender === "female"}
                           onChange={(event) =>
                             onChange("gender", event.target.value)
                           }
                         />
                           <label htmlFor="female">Female</label>
                           </span>
                           </p>
             </div>
             <div className="input-label">
                <p>
                    <label>Martial Status : </label>
                    <select value={userInput.maritalStatus}
                    onChange={(event)=>{onChange("maritalStatus",event.target.value)
                    }}>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                    </select>
                </p>
                 <p>
                    <label>Health Insurance : </label>
                    <select value={userInput.isHealthInsurance}
                    onChange={(event)=>{onChange("isHealthInsurance",event.target.value)}}>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </p>
                      {userInput.isHealthInsurance==="Yes" && 
                    <p> <label>Monthly Installment : </label>
                        <input type="number" placeholder="Enter monthly premium" 
                        value={userInput.healthInsuranceAmount}
                        onChange={((event)=>onChange("healthInsuranceAmount",event.target.value))} />
                    </p>}
             </div>
             <div className="input-label">
                 <p>
                    <label>Life Insurance : </label>
                    <select value={userInput.isLifeInsurance}
                    onChange={(event)=>{onChange("isLifeInsurance",event.target.value)}}>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </p>
                           {userInput.isLifeInsurance==="Yes" && 
                    <p> <label>Monthly Installment : </label>
                        <input type="number" placeholder="Enter monthly premium"
                        value={userInput.lifeInsuranceAmount}
                        onChange={((event)=>onChange("lifeInsuranceAmount",event.target.value))} />
                    </p>   }
                     <p>
                    <label>EMI : </label>
                    <select value={userInput.isEmi}
                    onChange={(event)=>{onChange("isEmi",event.target.value)}}>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </p>
                      {userInput.isEmi==="Yes" && 
                    <p> <label>Monthly EMI Installment : </label>
                        <input type="number" placeholder="Enter monthly EMI amount" 
                        value={userInput.emiAmount}
                         onChange={((event)=>onChange("emiAmount",event.target.value))}/>
                    </p>}
             </div>
             <button type="button" onClick={()=>onclick()}>Get SIP Recommendation</button>
             
        </section>
        </>
    )
}