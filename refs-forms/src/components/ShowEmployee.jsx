import { useEffect, useState } from "react"

export const ShowEmployee=()=>{
    const[employees, setEmployees]=useState([])

    async function getData(){
        let res= await fetch("http://localhost:8080/employees")
        let data=await res.json()
        setEmployees(data)
        
    }

    useEffect(()=>{
        getData()
    },[])

    return <div className="employees">
        {employees.map((el)=>(
            
            <ul>
                <li>{el.name}</li>
                <li>{el.age}</li>
                <li>{el.salary}</li>
                <li>{el.department}</li>
                <li>{el.maritalStatus}</li>
                <li>{el.address}</li>
            </ul>
        ))}
    </div>
     
}
 