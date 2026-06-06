import { formatter,calculateInvestmentResults,calculateYearlyData} from "../assets/calculation";
export default function SipResults({input}){
           const resultsData = calculateInvestmentResults(input);
           const resultsYearlyData = calculateYearlyData(input);
        return(
            <>
            <div className='cards-summary'>
                <div className='card'>
                    <h3>Total Invested :</h3>
                    <p>{formatter.format(resultsData.totalInvested)}</p>
                </div>
                 <div className='card'>
                    <h3>Wealth Gained :</h3>
                    <p>{formatter.format(resultsData.wealthGained)}</p>
                </div>
                 <div className='card'>
                    <h3>Maturity Value :</h3>
                    <p>{formatter.format(resultsData.maturityValue)}</p>
                </div>
            </div>
            <table  id='result'>
              <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Invested</th>
                    <th>Wealth Gained</th>
                    <th>Maturity Value</th>
                </tr>
              </thead>
              <tbody>
               {resultsYearlyData.map(yearData=>{
                return(
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.totalInvested)}</td>
                        <td>{formatter.format(yearData.wealthGained)}</td>
                        <td>{formatter.format(yearData.maturityValue)}</td>
                    </tr>
                )
               })}
              </tbody>
            </table>
            </>
        )
        }