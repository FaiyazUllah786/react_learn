import { useState } from "react"


function App() {

  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-500" style={{ backgroundColor: color }}>

        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 shadow-xl bg-white px-4 py-2 rounded-xl">
            {/* he on click method in React expects a function reference You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax  */}

            <button className="outline-none px-4 py-1 rounded-full bg-red-700 text-white shadow-lg" onClick={() => setColor('red')}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full bg-green-700 text-white shadow-lg" onClick={() => setColor('green')}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full bg-blue-700 text-white shadow-lg" onClick={() => setColor('blue')}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full bg-white text-black shadow-lg" onClick={() => setColor('white')}>White</button>
            <button className="outline-none px-4 py-1 rounded-full bg-black text-white shadow-lg" onClick={() => setColor('black')}>Black</button>
            <button className="outline-none px-4 py-1 rounded-full bg-sky-700 text-white shadow-lg" onClick={() => setColor('DodgerBlue')}>Sky Blue</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
