import { useState } from 'react'
import './App.css'


const app = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App
