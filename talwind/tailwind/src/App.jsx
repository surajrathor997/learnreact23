import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './component/Cards.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <> 
    <Card username="kjgkgkj" btnText='click me!' />
    <Card username="ravi" btnText='click me!' />
    <Card username="some " btnText='click me!' />
    <Card username="no" btnText='click me!' />
    <Card username="kajal"  btnText='click me!'/>
    <Card/>
   
    </>
  )
}

export default App
