import { Link } from "react-router-dom"
import Login from "./Login"

export default function Home() {

    return(
        <>
        <div>
            Hi
        </div>
        <Link to='/login'>Login</Link>
        </>
    )
}