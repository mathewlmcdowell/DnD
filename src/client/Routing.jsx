import { Routes, Route, Link } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import './style.css'

export default function Routing() {

    return(
  <>

    <div className="bg-secondary text-white container" style={{ width: '75rem', height: '100vh' }}>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  </>
    )
}