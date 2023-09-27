import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="WEB-APP">
      <div className="box1">
        <h1 className="Greet">Good Afternoon &#128588;</h1>
        <h2 className="Greet_Under">Atibodee Kuiprasert</h2>
      </div>

      <div className="box2">
        <h3 className="Greet_Big">WELCOME TO</h3>
        <h4 className="Greet_Small">smart shopping cart</h4>
      </div>
    </div>


  )
}

export default App
