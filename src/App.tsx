
import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import styles from "./scss/App.module.scss";


function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
