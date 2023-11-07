import { useState } from 'react';
import Routing from './Routing';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


export default function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <Routing />
    </>
  );
}

