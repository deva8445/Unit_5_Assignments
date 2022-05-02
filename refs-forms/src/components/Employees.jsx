import { useState } from "react"
import {nanoid} from "nanoid"

export const Employee=()=>{
    const [employee,setEmployee]=useState({
        id:null,
        name:"",
        age:null,
        department:"",
        salary:"",
        maritalStatus:"",
    })
 function handleChange(e){
     e.preventDefault()
     const{id,value}=e.target
    setEmployee({...employee,id:nanoid(),[id]:value})
    console.log(employee)
    console.log(id,value)
 }

const postData=async(data)=>{
   
 fetch("http://localhost:8080/employees",{
    method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
}
const addEmployee=()=>{
   postData(employee)
}
    return <div>
        <div>
        <input onChange={handleChange} id="name" type="text" placeholder="name"/>
            <input onChange={handleChange}id="age"type="Number" placeholder="age"/>
            <input onChange={handleChange}id="address"type="area" placeholder="address"/>
             <select onChange={handleChange} id="department">
                <option value="engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Singer">Singer</option>
             </select>
             <input onChange={handleChange} id="salary" type="text" placeholder="salary" />
            <label htmlFor="maritalStatus">Married</label>
            <input  onChange={handleChange}id="maritalStatus"type="checkbox" value="Married"/>
            <label htmlFor="maritalStatus" value="Unmarried">Unmarried</label>
            <input onChange={handleChange} id="maritalStatus"type="checkbox" value="UnMarried" />
           
        </div>
          
        
            <button onClick={()=>addEmployee()}>Add employee</button>
         </div>
}