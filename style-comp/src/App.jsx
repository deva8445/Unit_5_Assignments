import { useState } from 'react'
 
import './App.css'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button>Primary</Button>
      <Button>Default Button</Button>
      <Button>Dashed</Button>
      <Button>Text Button</Button>
      <Button>Link Button</Button>
    </div>
  )
}

export default App
