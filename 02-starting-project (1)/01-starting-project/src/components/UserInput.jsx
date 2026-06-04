import { useState } from "react"
export default function UserInput({onChange,userInput}){

    return<> 
    <section id="user-input">
      <div className="input-group">
        <p>
            <label>Monthly SIP Amount</label>
            <input type="number" required value={userInput.initialInvestment}
            onChange={(event)=> onChange("initialInvestment",event.target.value)} />
        </p>
         <p>
            <label>Excepted Annual Return</label>
            <input type="number" required value={userInput.annualInvestment}
             onChange={(event)=> onChange("annualInvestment",event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
            <label>Duration</label>
            <input type="number" required value={userInput.expectedReturn}
             onChange={(event)=> onChange("expectedReturn",event.target.value)}/>
        </p>
      </div>
       <p>
        <button color="blue">Calculate</button>
       </p>
    </section>
          </>
}