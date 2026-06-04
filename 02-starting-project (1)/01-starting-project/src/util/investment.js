export function calculateInvestmentResults({
  monthlySipAmount,
  expectedAnnualReturn,
  duration,
}) {
 const months=duration*12;
 const monthlyRate = expectedAnnualReturn/12/100;
 const totalInvested = months*monthlySipAmount;
 const maturityValue = monthlySipAmount*
 (((Math.pow(1+monthlyRate,months)-1)/monthlyRate)*(1+monthlyRate));
 const wealthGained = maturityValue-totalInvested;
return({
  totalInvested,
  wealthGained,
  maturityValue
})
}
export function calculateYearlyData({
  monthlySipAmount,
  expectedAnnualReturn,
  duration
}){
  const yearlyData = [];
   for( let year=1;year<=duration;year++){
    const months=year*12;
    const monthlyRate = expectedAnnualReturn/12/100;
    const totalInvested = monthlySipAmount*months;
    const maturityValue = monthlySipAmount*
    (((Math.pow(1+monthlyRate,months)-1)/monthlyRate)*(1+monthlyRate));
    const wealthGained = maturityValue-totalInvested;
    yearlyData.push({
      year,
      totalInvested,
      wealthGained,
      maturityValue
    })
   }
   return yearlyData;
}
export const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
