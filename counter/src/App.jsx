import { useState } from "react"


function App() {
  // function addVal() {
  //   counter = counter + 1
  //   console.log(counter)
  // }

  //to rebuild app ui u have to use useState which give an array arr[0]=state and arr[1]=setState() method
  //u can assign state by using useState(*anything can be here(Number,Boolean,String,Function etc)*)
  //u have to rebuild app ui by providing state into setState() method i.e. setState(state)

  //in this counter app we are updating counter variable which here is a state and counter value=useState(0) initially
  let [counter, setState] = useState(0)
  //increasing state(counter) values by +1
  const addVal = () => {
    counter++
    console.log(counter, typeof counter)
    //updating state using setSate()
    setState(counter)

  }

  //decreasing state(counter) values by -1
  function remVal() {
    if (counter > 0) counter--
    //updating state using setSate()
    setState(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addVal}>Add value {counter}</button>
      <br />
      <button onClick={remVal}>Remove value {counter}</button>
    </>
  )
}

export default App