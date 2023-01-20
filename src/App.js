import './App.css';
import Pokemon from './Components/Pokemon';
import Starwars from './Components/Starwars';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import SecondRoute from './Components/SecondRoute';
import Hello from './Components/Hello';
import HelloRed from './Components/HelloRed';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/pokemon' element={<Pokemon/>} />
          <Route path='/starwars' element={<Starwars/>} />
          <Route path='/hello' element={<Hello/>} />
          <Route path='/4' element={<SecondRoute/>} />
          <Route path='/hello/blue/red' element={<HelloRed/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
