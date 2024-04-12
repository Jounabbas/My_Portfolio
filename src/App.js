
import './App.css';
import './index.css';
import { BrowserRouter as Main,Routes,Route } from 'react-router-dom';
import Navebar from './component/Navebar';
import Home from './component/Home';
import { useContext ,useEffect} from 'react';
import { appcontext } from './context/context';
import { Color_change } from './component/Color_change';
import Contact from './component/Contact';

function App() {
  const {mode}=useContext(appcontext)
  useEffect(() => {
    const body = document.querySelector('body');
    if (mode) {
      body.style.backgroundColor = 'rgb(17,17,17)';
     
    } else {
      body.style.backgroundColor = 'white';
    }
  }, [mode]);
  return (
   <div>
      <Main>
       <Navebar/>
       <Color_change/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
      </Main>
   </div> 
  );
}

export default App;
