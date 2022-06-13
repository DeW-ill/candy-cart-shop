import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//IMPORT CLIENT
import Home from "../../pages/Home";

// import Route from './services/wAuth'
import Cart from "./../../pages/Cart";
import Layout from "./../Layout/Layout";

export default function Routers() {
  return (
    <Router>
      {/*Rota Home*/}
      <Routes>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
        </Layout>
        <Layout>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Layout>
      </Routes>
      {/*Rota Cart*/}
    </Router>
  );
}
