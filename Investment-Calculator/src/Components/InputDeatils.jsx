import {useState} from 'react';

export default function InputDetails({userInput,onChangeInput}){
  


return(
<section id="input-details">
    <div><label >Intial Investment</label>
    <input type="number"   onChange={(event)=>onChangeInput('IntialInvestment',event.target.value)}/></div>
<div><label >Annual Investment</label>
<input type="number"  onChange={(event)=>onChangeInput('AnnualInvestment',event.target.value)} /></div>
<div><label >Expected Return</label>
<input type="number"  onChange={(event)=>onChangeInput('ExpectedReturn',event.target.value)} /></div>
<div><label >Duration</label>
<input type="number"  onChange={(event)=>onChangeInput('Duration',event.target.value)} /></div>



</section>

)



}

