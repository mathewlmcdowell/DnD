import { useState } from 'react';
import Routing from './Routing';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './components/Navbar';
import './style.css'


export default function App() {
  const [count, setCount] = useState(0);


  return (
    <>
        <Navbar />
        <div className='mt-2'>
        <Routing />
        </div>
    </>
  );
}

