import { calculateSipAmount,formatter } from "../assets/calculation"
import {CountUp} from "react-countup";
export default function RecommendResults({userInput}){
       const results = calculateSipAmount(userInput);
       console.log("sipAmount:", results.sipAmount, typeof results.sipAmount)
    return(
        <>
       <section className="recommend">
  <h2>💰 SIP Recommendation</h2>

  <div className="result-box">
    <p>Available Income</p>
    <h3>{formatter.format(results.availableAmount)}</h3>
  </div>

  <div className="result-box highlight">
    <p>Recommended SIP</p>
  <h3>{formatter.format(results.sipAmount)}</h3>
  </div>

  <div className="result-box">
    <p>SIP Percentage</p>
    <h3>{results.recommendedSipPercentage}%</h3>
  </div>
</section>
        </>
    )
}