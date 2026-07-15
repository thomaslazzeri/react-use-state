
import './App.css';
import { Header } from './components/Header';
import Main from './components/Main';
import languages from "./components/languages.js";

const App = () => {
  
  return (
    <>
      <Header />
      <Main languagesProgram={languages}/>
    </>
  );
};

export default App;