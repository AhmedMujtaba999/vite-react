import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='bg-green-500 text-black p-2 rounded-3xl center text-3xl font-bold mb-4'>
        Tailwind CSS!
      </h1>
   <Card channelName="Ahmed Mujtaba" btntext="Click me!"/>
   <Card channelName="Code With Ahmed" btntext="visit channel"/>
    </>
  )
}

export default App
