import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import { About } from './components/AboutUs'
import {Men} from  "./components/Men"
import { Navbar } from './components/Navbar'
import { Women } from './components/Women'
 import {Home} from "./components/Home"
 import{Footer} from "./components/Footer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Navbar/>
       <Routes>
         <Route path="/Home" element={<Home/>}></Route>
          <Route path="/men" element={ <Men/>}></Route>
          <Route path="/women" element={<Women/>}></Route>
          <Route path="/about" element={<About/>}></Route>
       </Routes>
      <Footer/>
    </div>
  )
}

export default App
