
export function invCalculator({IntialInvestment,AnnualInvestment,ExpectedReturn,Duration}){

    let investment = IntialInvestment;
    let totalInterest =0;
    let annualData=[]
    for(let i=1;i<=Duration;i++){
        const interestThisYear =investment*(ExpectedReturn/100);
        investment+=interestThisYear+AnnualInvestment;
        totalInterest+=interestThisYear;
        annualData.push({
          year:i,
          investmentValue :investment,
          interest:interestThisYear  ,
          tinterest:totalInterest
        })

    }
    return annualData;


}
export const formatter = new Intl.NumberFormat('en-US',{
style: 'currency',
currency:'INR',
minimumFractionDigits:0,
maximumFractionDigits:0,
})