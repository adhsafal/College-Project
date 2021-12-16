import './App.css';
import { Route, Routes } from 'react-router-dom'

import Customize from './Components/Customize/Customize';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
