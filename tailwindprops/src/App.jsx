import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx';

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name: "Faiyaz",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl text-3xl font-bold underline mb-4'>Hello World!!</h1>
      {/* <Card channel='Chai Aur React' someObj={myObj} /> */}
      <Card userName='Janki' btnText='click me' />
      <Card userName='Falak' btnText='know more' />
    </>
  )
}

export default App
