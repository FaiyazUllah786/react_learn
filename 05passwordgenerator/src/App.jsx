import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  //length of password
  const [length, setLength] = useState(6)
  //number is either present in a password or not
  const [numberAllowed, setNumberAllowed] = useState(false)
  //uppercase
  const [upperCaseAllowed, setUpperCaseAllowed] = useState(false)
  //lowercase
  const [lowerCaseAllowed, setLowerCaseAllowed] = useState(false)
  //special characters in password present or not
  const [specialAllowed, setSpecialAllower] = useState(false)
  //change state with respect to password
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = ""
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCase = "abcdefghijklmnopqrstuvwxy"
    let number = "0123456789"
    let special = "!@#$%^&*()-_=+[{]}\\|;:,<.>/?"
    let defaultValue = upperCase + lowerCase + number + special

    if (numberAllowed) str += number
    if (specialAllowed) str += special
    if (upperCaseAllowed) str += upperCase
    if (lowerCaseAllowed) str += lowerCase

    if (str === "") {
      for (let i = 1; i <= length; i++) {
        let idx = Math.floor(Math.random() * defaultValue.length + 1)
        pass += defaultValue.charAt(idx)
      }
    } else {
      //now extracting password from strk
      for (let i = 1; i <= length; i++) {
        let idx = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(idx)
      }
    }


    setPassword(pass)

  }, [length, numberAllowed, specialAllowed, upperCaseAllowed, lowerCaseAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialAllowed, upperCaseAllowed, lowerCaseAllowed, passwordGenerator])

  //copy to clipboard
  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }, [password])
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="mx-96 p-6 w-full  rounded-3xl shadow-xl shadow-slate-600 " style={{ backgroundColor: '#000518' }}>
          <div className="flex flex-row my-4 items-center bg-transparent">
            <img src="https://cdn3.vectorstock.com/i/1000x1000/00/47/lock-icon-vector-13820047.jpg" alt="lock-image" className="h-8 w-8 rounded-lg"></img>
            <h1 className="text-white bg-transparent m-5 font-bold text-3xl">Password Generator</h1>
          </div>
          <div className="flex flex-row rounded-lg overflow-hidden border-2 items-center shadow-md shadow-slate-500">
            <input
              type="text"
              value={password}
              className="outline-none w-full px-3 py-2 text-white font-semibold text-xl"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            ></input>
            <button className="cursor-pointer text-white px-3 m-3 shrink-0" onClick={copyToClipboard}>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 13H16.6667C17.1269 13 17.5 12.6269 17.5 12.1667V3.83333C17.5 3.3731 17.1269 3 16.6667 3L8.33333 3C7.8731 3 7.5 3.3731 7.5 3.83333L7.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.33333 18L11.6667 18C12.1269 18 12.5 17.6269 12.5 17.1667L12.5 8.83333C12.5 8.3731 12.1269 8 11.6667 8L3.33333 8C2.8731 8 2.5 8.3731 2.5 8.83333L2.5 17.1667C2.5 17.6269 2.8731 18 3.33333 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-y-2 p-4 rounded-lg my-2 bg-transparent shadow-md shadow-slate-500">
            <div className="flex flex-row justify-between my-2 items-center bg-transparent">
              <label className="bg-transparent text-white">Password length | {length}</label>
              <button className="text-white bg-blue-900 p-2 rounded-3xl" onClick={() => setLength(6)}>Reset</button>
            </div>
            <input type="range" value={length} min={6} max={100} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }}></input>
          </div>
          <div className="flex flex-row justify-between p-4 rounded-lg my-2 bg-transparent shadow-md shadow-slate-500">
            <label className="bg-transparent text-white">UpperCase (A-Z)</label>
            <input type="checkbox" className="cursor-pointer" id="upperCase" defaultChecked={upperCaseAllowed} onChange={() => {
              setUpperCaseAllowed((prev) => !prev)
            }}></input>
          </div>
          <div className="flex flex-row justify-between p-4 rounded-lg my-2 bg-transparent shadow-md shadow-slate-500">
            <label className="bg-transparent text-white">LowerCase (a-z)</label>
            <input type="checkbox" id="lowerCase" defaultChecked={lowerCaseAllowed} onChange={() => {
              setLowerCaseAllowed((prev) => !prev)
            }}></input>
          </div>
          <div className="flex flex-row justify-between p-4 rounded-lg my-2 bg-transparent shadow-md shadow-slate-500">
            <label className="bg-transparent text-white">Number (0-9)</label>
            <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}></input>
          </div>
          <div className="flex flex-row justify-between p-4 rounded-lg my-2 bg-transparent shadow-md shadow-slate-500">
            <label className="bg-transparent text-white">Symbol (!#$@)</label>
            <input type="checkbox" id="specialInput" defaultChecked={specialAllowed} onChange={() => { setSpecialAllower((prev) => !prev) }}></input>
          </div>
          <div className="flex flex-row justify-between p-4 mt-8 rounded-lg bg-blue-900 shadow-md shadow-slate-500">
            <button className="text-center text-white font-bold text-xl bg-transparent">Generate Password</button>
          </div>
        </div>
      </div >
    </>
  );
}

export default App