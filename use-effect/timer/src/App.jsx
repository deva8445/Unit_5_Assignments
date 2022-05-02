import { useState } from 'react'
import './App.css'
import { Input } from './components/inputTime'
import { Timer } from './components/timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Input/>
     <Timer/>
    </div>
  )
}

export default App
