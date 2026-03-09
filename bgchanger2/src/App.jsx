import { useState } from 'react'

function App() {

  const [bgColor, setBgColor] = useState("olive") // the defualt color is olive

  return (

    <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 place-content-center font-bold'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setBgColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("purple")}
            style={{ backgroundColor: "purple" }}
          >Purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("blue")}
            style={{ backgroundColor: "blue" }}
          >Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("pink")}
            style={{ backgroundColor: "pink" }}
          >Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("skyblue")}
            style={{ backgroundColor: "skyblue" }}
          >Sky Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("green")}
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("silver")}
            style={{ backgroundColor: "silver" }}
          >Silver</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("orange")}
            style={{ backgroundColor: "orange" }}
          >Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("brown")}
            style={{ backgroundColor: "brown" }}
          >Brown</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setBgColor("black")}
            style={{ backgroundColor: "black" }}
          >Black</button>
        </div>
      </div>
    </div>

  )
}

export default App
