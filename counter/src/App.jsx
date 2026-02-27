import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10) // useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update that value. In this case, we are initializing the counter state with a value of 10 and providing a function setCounter to update it.

  // let counter = 0;
  let addvalue = () => {
    // ui will not update because we are not using state to update the counter value   
    //counter = counter+1 ;
    if(counter<25)
    setCounter(counter + 1) // this will update the counter value and re-render the component to reflect the new value in the UI
    console.log("clicked", counter);
  }
  let removevalue = () => {
    // console.log("clicked", counter); // ui will not update because we are not using state to update the counter value   
    //counter = counter-1 ;
    if(counter >0)
    setCounter(counter - 1) // this will update the counter value and re-render the component to reflect the new value in the UI
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}
      >Add value {counter}</button>
      <br />
      <button onClick={removevalue}
      >decrease value {counter}</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
