import { Routes, Route, Link } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"


export default function Routing() {

    return(
  <>

    <div className="bg-dark text-white .outline">
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  </>
    )
}