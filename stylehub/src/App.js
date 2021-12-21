import './App.css';
import { Route, Routes } from 'react-router-dom'

import Customize from './Components/Customize/Customize';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </>
  );
}

export default App;
