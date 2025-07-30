import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter] = useState(15)
  const addValue = ()=>{
    console.log("clicked",counter);
    counter = (counter + 1)%20;
    setCounter(counter)
    
     
    
  }
  const remove = ()=>{
    console.log("clicked",counter);
    counter = (counter - 1)%20;
    setCounter(counter)
    
     
    
  }


  return (
    <>
      <h1>code hai bhai</h1>
      <h2>counter value {counter}</h2>

      <button onClick={addValue} >Add value  {counter}</button>
      <br />
      <button onClick={remove} >remove value</button>
    </>
  )
}

export default App
