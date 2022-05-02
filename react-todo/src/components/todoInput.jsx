import { useState } from "react"
import {nanoid} from"nanoid"


export const TodoInput=()=>{
    
    const [todo,setTodo]=useState({
        id:null,
        title:"",
        Mystat:false
    })

    const url="http://localhost:8080/todos"
    const postData=async()=>{
             await fetch(url, {
                method: 'POST',  
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
              })
    }

    function handleChange(e){
        e.preventDefault()
       const {id,value}=e.target
       setTodo({...todo,id:nanoid(),[id]:value})
       
    }
    function handleSubmit(){
        postData()
    }
    
    return <div>
        <input type="text" id="title" onChange={handleChange} />
        <button onClick={handleSubmit}>Add todo</button>
    </div>
}
 