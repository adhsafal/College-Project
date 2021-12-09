import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home'
import Error from "./Components/Home/Error";
import Product from "./Components/Product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route component={Error} />
      </Routes>
    </>
  );
}

export default App;
