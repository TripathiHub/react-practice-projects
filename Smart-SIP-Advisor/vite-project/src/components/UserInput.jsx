export default function UserInput({onChange,userInput,onsipchange}){

    return<> 
    <section id="user-input">
      <div className="input-group">
        <p>
            <label>Monthly SIP Amount(INR)</label>
            <input type="number" required value={userInput.monthlySipAmount}
            onChange={(event)=> onChange("monthlySipAmount",event.target.value)} />
        </p>
         <p>
            <label>Excepted Annual Return(%)</label>
            <input type="number" required value={userInput.expectedAnnualReturn}
             onChange={(event)=> onChange("expectedAnnualReturn",event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
            <label>Duration(yrs)</label>
            <input type="number" required value={userInput.duration}
             onChange={(event)=> onChange("duration",event.target.value)}/>
        </p>
      </div>
       <button onClick={()=>onsipchange()}>Get SIP Details</button>
    </section>
          </>
}