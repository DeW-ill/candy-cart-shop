import React from "react";
import { Routes, Route } from "react-router-dom";

import { CartProvider } from "react-use-cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// import api from './services/api'

// import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from "../src/components/Navbar/Navbar";
import CustomBadges from "../src/components/badge/Badge";
const App = () => {
  // const { ProductItems } = api
  return (
    <>
      <CartProvider>
        <header>
          <Navbar badge={<CustomBadges />} />
        </header>
        <main>
          {/* <Layout> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>

          {/* </Layout> */}
        </main>
      </CartProvider>
    </>
  );
};

export default App;
