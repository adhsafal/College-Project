import './App.css';
import { Route, Routes } from 'react-router-dom'

import Customize from './Components/Customize/Customize';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </>
  );
}

export default App;
