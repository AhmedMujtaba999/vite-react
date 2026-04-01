import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProvider from './context/UsercontextProvider'
import Login from './components/login'
import Profile from './components/profile'


function App() {
 

  return (
    <UserContextProvider>
   <h1>Context API</h1>
   <Login />
   <Profile />
    </UserContextProvider>
  )
}

export default App
