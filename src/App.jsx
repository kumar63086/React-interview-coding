import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Timer } from './Components/Timer';
import { Productlist } from './Components/Productlist';
import { Registaion } from './Components/Registaion';
import Todolist from './Components/Todolist';
import { DarkLightMode } from './Components/DarkLightMode';
import Counter from './Components/Counter';
import { Calculaters } from './Components/Calculaters';
import Login from './Components/Login';
import { ProductList } from './Components/ProductFilter';
function App() {
  return (
    <Routes>
      <Route path="/timer" element={<Timer />} />
      <Route path="/productlist" element={<Productlist />} />
      <Route path="/Resiter" element={<Registaion />} />
      <Route path="/todolist" element={<Todolist />} />
      <Route path="/darkmode" element={<DarkLightMode />} />
      <Route path="/counter" element={<Counter />} /> 
      <Route path="/calculater" element={<Calculaters />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/productfilter" element={<ProductList />} /> 






    </Routes>
  );
}
``
export default App;
