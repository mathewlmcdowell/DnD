import { useState } from 'react';
import Routing from './Routing';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routing />
    </>
  );
}

