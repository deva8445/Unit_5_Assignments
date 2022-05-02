
import { useState } from 'react'
import './App.css'
import { ShowTodo } from './components/showTodo'
import { TodoInput } from './components/todoInput'
 

function App() {
    
  return (
    <div className="App">
     <TodoInput/>
     <ShowTodo/>
    </div>
  )
}

export default App
