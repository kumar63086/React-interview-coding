import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Timer } from './Components/Timer';

function App() {
  return (
    <Routes>
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
}

export default App;
