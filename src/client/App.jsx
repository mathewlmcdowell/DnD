import { useState, useEffect } from 'react';
import Routing from './Routing';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './components/Navbar';
import './style.css';
import Fetch from './components/Fetch';



export default function App() {

  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //     checkLogin().then(data => {
  //         setIslogin(data.login);
  //         setUser(data.user);
  //     });
  // }, [])


  return (
    <>
        <Navbar />
        <div className='mt-2'>
        <Routing />
        </div>
    </>
  );
}

