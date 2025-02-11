import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import InputDetails from './Components/InputDeatils'
import Result from './Components/result'

function App() {
  const [userInputb,setuserInput]= useState({IntialInvestment:0,AnnualInvestment:0,ExpectedReturn:0,Duration:0});

  function handleChange (inputBoxName, newValue){
    setuserInput(prevInput=>{
        return{
            ...prevInput,
            [inputBoxName]: +newValue,
        }
      
    });
    
    
     }
       
  return (
    <>
      <Header></Header>
      <InputDetails userInput={userInputb} onChangeInput={handleChange}></InputDetails>
      <Result userInput={userInputb}></Result>
    </>
  )
}

export default App
