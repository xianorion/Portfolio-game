import logo from './logo.svg';
import './App.css';
import Sprite from './Components/Sprite';
import Gallery from "./Components/Gallery"
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={Gallery}/>

<Route path='/Illustrations'/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
