import { use, useState } from 'react'
 import { InputBox } from './components'
 import useCurrencyInfo from './hooks/useCurrencyinfo'

import './App.css'

function App() {
  const [ amount,setAmount] = useState(0)
  const[from,setFrom] = useState('USD')
  const [to,setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const CurrencyInfo = useCurrencyInfo(from)

  const options = Object.keys(CurrencyInfo)
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
const convert = () => {

  setConvertedAmount(amount * CurrencyInfo[to])
}



  return (


    <div className="w-full h-screen flex flex-wrap items-center justify-center bg-cover bg-no-repeat"
     style={{
       backgroundImage: `url( 'https://media.gettyimages.com/id/184962061/photo/business-towers.jpg?s=612x612&w=gi&k=20&c=Iw2MruV_UEORrJi036Zb5TOP74HMSpsihyuTnG74XBk=' )` }}>

        <div className="w-full">
          <div
           className="w-full max-w-md max-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
            <form onSubmit={(e)=>{
              e.preventDefault();
              convert();
              }}>

                <div className="w-full mb-1">
                  <InputBox label="from"
                  amount={amount}
                  currencyOptions={options} 
                  onCurrencyChange={(currency)=>setAmount(amount)}
                  selectedCurrency='{from}'
                  onAmountChange={(amount)=>setAmount(amount)}
                  /> 
                </div>
                <div className="relative w-full h-0.5">
                  <button
                  type='button'
                  className="absolute top-0 left-1/2 -translate-x-1/2
                  -translate-y-1/2  border-2 border-white rounded-md w-13
                  bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                  >
                    Swap
                  </button>

                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox label="To"
                  amount={convertedAmount}
                  currencyOptions={options} 
                  onCurrencyChange={(currency)=>setTo(currency)}
                  selectedCurrency='{from}'
                  amountDisable
                  />
                </div>
                <button
                type='submit'
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-3">
                Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
               
            </form>
           </div>
        </div>
       </div>



 





       
  )
}

export default App

