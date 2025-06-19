import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Timer } from './Components/Timer';
import { Productlist } from './Components/Productlist';
import { Registaion } from './Components/Registaion';
function App() {
  return (
    <Routes>
      <Route path="/timer" element={<Timer />} />
      <Route path="/productlist" element={<Productlist/>} />
      <Route path="/Resiter" element={<Registaion/>} />

      

    </Routes>
  );
}

export default App;
