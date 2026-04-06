import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addtodos from './components/Addtodos'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
    <h1 className="text-3xl font-bold text-white mb-4 mt-8">Redux Toolkit todo app</h1>
    <Addtodos />
    <Todos />
     </>

  )
}

export default App
