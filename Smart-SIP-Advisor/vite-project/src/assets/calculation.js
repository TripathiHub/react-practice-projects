export function calculateSipAmount({
    monthlySalary,
    age,
    gender,
    maritalStatus,
    isHealthInsurance,
    healthInsuranceAmount,
    isLifeInsurance,
    lifeInsuranceAmount,
    isEmi,
    emiAmount,
}){
  let availableAmount = Number(monthlySalary);
  let sipAmount = availableAmount;
  let numberAge = Number(age);

  if(isHealthInsurance==="Yes"){
    availableAmount -= Number(healthInsuranceAmount || 0);
  }
  if(isLifeInsurance==="Yes"){
    availableAmount -= Number(lifeInsuranceAmount || 0);
  }
  if(isEmi==="Yes"){
    availableAmount -= Number(emiAmount || 0);
  }
  if(maritalStatus==="Single"){
    if(numberAge<18){
    sipAmount =0.50*availableAmount}
    else if(numberAge>=18 && numberAge<=25){
    sipAmount = 0.35*availableAmount
    }
    else if(numberAge>=26 && numberAge<=35){
    sipAmount =0.30*availableAmount
    }
    else if(numberAge>=36 && numberAge<=45){
    sipAmount =0.25*availableAmount
    }
    else if(numberAge>=46 && numberAge<=60){
    sipAmount =0.20*availableAmount}
    else if(numberAge>60){
    sipAmount =0.10*availableAmount;
  }
} else{
   if(numberAge<18){
    sipAmount =0.45*availableAmount}
    else if(numberAge>=18 && numberAge<=25){
    sipAmount =0.25*availableAmount
    }
     else if(numberAge>=26 && numberAge<=35){
    sipAmount =0.20*availableAmount
    }
    else if(numberAge>=36 && numberAge<=45){
    sipAmount =0.15*availableAmount
    }
    else if(numberAge>=46 && numberAge<=60){
    sipAmount =  0.10*availableAmount
    }
    else if(numberAge>60){
    sipAmount =0.05*availableAmount
    }
    }
    if(gender==="female"){
        sipAmount= sipAmount*1.10;
    }
    const recommendedSipPercentage = (sipAmount/availableAmount)*100;
return{
   availableAmount: Math.round(availableAmount) || 0,
   sipAmount : Math.round(sipAmount) || 0,
   recommendedSipPercentage: Math.round(recommendedSipPercentage) || 0
}
}
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
export const formatter = new Intl.NumberFormat("en-IN",{
  style : "currency",
  currency: "INR",
  maximumFractionDigits: 0,
  minimumFractionDigits:0
})