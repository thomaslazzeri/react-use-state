import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import languages from "./components/languages.js";

const App = () => {
  const [state, setState] = useState(false);
  
  return (
    <>
      <Header />
      <Main languagesProgram={languages}/>
    </>
  );
};

export default App;