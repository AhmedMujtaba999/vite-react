import { useState, useCallback, useEffect, useRef, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // -------------------------------useState hooks-------------------------------
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [pwd, setpwd] = useState("")

  // --------------------------------useRef hook--------------------------------
const pwdref =useRef(null) // useRef is a hook in React that allows you to create a mutable reference that persists across renders. It can be used to access and manipulate DOM elements directly, store mutable values, or keep track of previous values without causing re-renders. In this code, pwdref is created using useRef, but it is not being used anywhere in the component. It 
// can be used to reference the input element for the password or any other element if needed in the future.

//----------------------- useCallback hook -----------------------
  const pwdgenerator = useCallback(() => { // HELPS in optimization by memoizing the function and preventing unnecessary re-creations of the function on every render, 
    // which can improve performance, especially when the function is passed as a prop to 
    // child components that rely on reference equality to prevent unnecessary re-renders.
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
  }, [length, numberAllowed, characterAllowed, setpwd])
  // u can or cannot add set
  // setpws in the dependency array as it is a state setter function 
  // and it will not change between renders, but it is generally recommended to include 
  // all dependencies in the array to avoid potential issues with stale closures.
const copyPasswordToClipboard = useCallback(() => {
  pwdref.current?.select() // selects the text in the input field
  pwdref.current?.setSelectionRange(0, 15) // for mobile devices, sets the selection range to cover the entire text
  window.navigator.clipboard.writeText(pwd) // writes the current password to the clipboard
 
}, [pwd])

  // on load it renders the 
  // password generator function to generate a password with the default settings
  // and then whenever the length, numberAllowed, or characterAllowed state changes,
  //  it will re-run the password generator function to generate a new password with the updated settings.
  // helps in memorization of the function and preventing 
  // unnecessary re-creations of the function on every render,
  // NO NEED TO MAKE A VARAIVLE FOR THIS HOOK AS IT DOES NOT RETURN ANYTHING

  //----------------------------useEffect hook-----------------------------
  useEffect(() => { pwdgenerator() },// whwen the page loads it renders and when dependency changes it re-renders
    [length, numberAllowed, characterAllowed, pwdgenerator])// u can or cannot add pwdgenerator in the dependency array as it is a function that is defined within the component and will not change between renders, but it is generally recommended to include all dependencies in the array to avoid potential issues with stale closures.

  return (
    <>
      <div className='text-center w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 py-8 text-bold text-orange-500 bg-gray-600'>
        <h1 className='text-2xl font-bold mb-4 text-black'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input
            type="text"
            value={pwd}
            className='outline-none w-full py-1 px-3 fill-pink-400 bg-white'
            placeholder='Password'
            ref={pwdref} // passed the ref here 
            readOnly

          />
          <button
          onClick={copyPasswordToClipboard} // using pwdref its selects and copy to clipboad
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-pink-500 transition-colors duration-300'
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
