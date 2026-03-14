import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [pwd, setpwd] = useState("")

  const pwdgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpwd(pass)
  }, [length, numberAllowed, characterAllowed, setpwd])// u can or cannot add set
// setpws in the dependency array as it is a state setter function 
// and it will not change between renders, but it is generally recommended to include 
// all dependencies in the array to avoid potential issues with stale closures.




  return (
    <>
    <div className='text-center w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 py-8 text-bold text-orange-500 bg-gray-600'>
      <h1 className='text-2xl font-bold mb-4 text-black'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
      <input 
      type="text"
      value ={pwd}
      className='outline-none w-full py-1 px-3 fill-pink-400 bg-white'
      placeholder='Password'
      readOnly

      />
      <button
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >
        copy
      </button>
    </div>
   <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range" 
      min={6}
      max={99}
      value={length}
      className='cursor-pointer'
      onChange={(e) => setLength(e.target.value)}
      />
      <label>Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      checked={numberAllowed}
      onChange={(e) => setNumberAllowed((prev) => !prev)}
      />
      <label>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      checked={characterAllowed}
      onChange={(e) => setCharacterAllowed((prev) => !prev)}
      />
      <label>Characters</label>
    </div>
   </div>
   <div className='mt-4'>
    <button 
    onClick={pwdgenerator}
    className='outline-none bg-green-700 text-white px-3 py-1 rounded-lg'
    >
      Generate Password
    </button>
   </div>
    </div>
    </>
  )
}

export default App
