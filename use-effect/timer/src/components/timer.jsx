import {useEffect,useRef, useState} from "react"


export const Timer=()=>{
   const [time,setTime]=useState(0)
   const counterRef=useRef(null)

//    useEffect(()=>{
//     counterRef.current= setInterval(()=>{
//           setTime((prevValue)=>prevValue+1)
//           if(counterRef.current>=10){
//               clearInterval(counterRef)
//               return
//           }
//        },1000)
//    },[])
 return <div>
            <h2>Counter: {time}</h2>
      </div>
}