import { Routes, Route, Link } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import CSheet from "./components/CSheet"
import './style.css'
import { useState } from 'react'
import Register from "./components/Register"


export default function Routing() {

  // let userObj = null;
  // const token = sessionStorage.getItem('initiativeToken');
  // if (token) {
  //     userObj = JSON.parse(atob(sessionStorage.getItem('initiativeToken').split('.')[1]));
  // }

  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState(null);

    return(
  <>

    <div className="bg-dark text-white container" style={{ width: '90%', height: '100vh'}}>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/CharSheet' element={<CSheet />} />
      </Routes>

    </div>
  </>
    )
}