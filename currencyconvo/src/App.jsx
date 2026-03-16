import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(fromCurrency);
  console.log(currencyInfo);
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  }
  return (
    <>
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={
          {
            backgroundImage: 'url(https://media.istockphoto.com/id/638540608/photo/magic-lights-background.jpg?s=1024x1024&w=is&k=20&c=o4zhaW5vy3-A1ZZu3IlN8pRxnIxNtnLzSDoXN29I00c=',
          }
        }
      >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            >
              <div className='w-full mb-1'>
                <InputBox
                  label="From"
                  amount={amount}
                  currrencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={fromCurrency}
                  onAmountChange={(amount)=> setAmount(amount)}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  type="button"
                  className='absolute left-40
                      - translate-x-2
                      -translate-y-3 border-2 
                      border-white rounded-md 
                      bg-blue-600 text-white px-3 py-0.5'
                  onClick={swap}>
                  Swap
                </button>

              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox
                  label
                  ="To"
                  amount={convertedAmount}
                  currrencyOptions={options}
                  onCurrencyChange={(currency) => setToCurrency(currency)}
                  selectCurrency={toCurrency}
                  amountDisabled
                />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg '>
                Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()} Ammo❤Tannu

              </button>

            </form>
          </div>
        </div>




      </div>


    </>
  );
}

export default App
