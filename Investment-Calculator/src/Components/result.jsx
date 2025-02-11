import { invCalculator } from "./investmentCalculation"
import { formatter } from "./investmentCalculation";
export default function Result({userInput}){
    const finalData = invCalculator(userInput);
    
return(
    <>
    {finalData.length>0 ? 
    <table style={{width:"800px", margin:"auto" ,marginTop:"50px"}} border={3}>
    <thead>
       <tr>
           <th>Year</th>
           <th>Investment Value</th>
           <th>Interest(Year)</th>
           <th>Total Interest</th>
           <th>Invested Captiol</th>


       </tr>
       
    </thead>
    <tbody>
       {finalData.map(data=>{
           return(<tr>
               <th>{data.year}</th>
               <th>{formatter.format(data.investmentValue)}</th>
               <th>{formatter.format(data.interest)}</th>
               <th>{formatter.format(data.tinterest)}</th>
               <th>{formatter.format(data.investmentValue-data.tinterest)}</th>
               
           </tr>)
       })}
    </tbody>


</table> :<></>}
    
    </>
)


}