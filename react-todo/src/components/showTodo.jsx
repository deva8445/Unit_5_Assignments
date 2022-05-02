import { useEffect, useState } from "react"
 
export const ShowTodo=()=>{
    const[todos,setTodos]=useState([])
   
   async function getData(){
        let res=await fetch("http://localhost:8080/todos")
        let data=await res.json()
        setTodos(data)
    }
    
    useEffect(()=>{
        getData()
        return 
    },[])

    const updateData=async(el)=>{
        await fetch(`http://localhost:8080/todos/${el.id}`, {
            method: 'PATCH',  
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(el),
        })
    }
    const DelData=async(el)=>{
        await fetch(`http://localhost:8080/todos/${el.id}`, {
            method: 'Delete',  
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    function statChange(el){
        el.Mystat= !el.Mystat
        updateData(el)
       
        
    }

    function DeleteTodo(el){
        DelData(el)
        
    }

    function filter(){
        let curr=todos.filter((el)=>{
            if(el.Mystat==true)
            return el.Mystat
        })
        setTodos(curr)
    }

return <div>
    {todos.map((el)=>{
       return <div className={el.Mystat===true?"green todo":"todo"} key={el.id}>
        <h3  className={el.Mystat===true?"linethrough":"none"}>{el.title} </h3>
        <h4>{el.Mystat===true ? "done":"not done"}</h4>
         <button onClick={()=>{DeleteTodo(el)}}>Delete</button>
        <button onClick={()=>{statChange(el)}}>Toggle</button>
    </div>
     } 
    )}
     <button onClick={filter}>Completed Todos</button>
     <button onClick={getData}>all</button>
</div>

}