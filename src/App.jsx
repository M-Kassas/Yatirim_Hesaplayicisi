import Header from "./components/Header"
import InvestmentForm from "./components/InvestmentForm"
import Result from "./components/Result"
import { useState } from "react"
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1300,
    expectedReturn: 7,
    duration: 10
  })
  const inputIsValid = userInput.duration >= 1
  function handleChange(inputIdent, newInput) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdent]: +newInput
      }

    })
  }
  return (<>
    <Header />
    <InvestmentForm onChangeInput={handleChange} userInput={userInput} />
    {!inputIsValid && (<p className="center">Lütfen sıfırdan büyük bir süre giriniz</p>)}
    {inputIsValid && < Result input={userInput} />}

  </>)

}

export default App
