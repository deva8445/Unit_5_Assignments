
import { Link } from "react-router-dom"
export const Navbar=()=>{
    let  nav=["Home","About","Men","Women"]
    return <div>
        {nav.map((el)=>(
            <Link key={el.id} to={el}> {el}</Link>
        ))}
    </div>
}