import  appLogo from '../assets/investment-calculator-logo.png'
export default function Header(){
return(
   <header>
         <img src={appLogo} style={{width:"150px",height:"150px"}} alt="investment-calculator" />
         <h2>Investment Calculator</h2>
   </header>
)


}