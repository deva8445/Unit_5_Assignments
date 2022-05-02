import {useState} from "react"

export const Input=()=>{
    const [inputTime,setTime]=useState(0)
    
    return <input type="text" placeholder="time"/>
}