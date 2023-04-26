import './App.css';
import Pagea from './components/Pagea';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Pageb from './components/Pageb';

function App() {
  return (
    <>
     <BrowserRouter basename='/'>
      <Routes>
        <Route exact path='/' element={<Pagea/>}/>
        <Route exact path='/b' element={<Pageb/>}/>
      </Routes>
     </BrowserRouter>
   
      
    </>
  );
}

export default App;
