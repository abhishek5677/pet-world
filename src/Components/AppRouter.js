import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import HistoryPage from "./HistoryPage";


const AppRouter = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
            path="/pet-world"
            element={<HomePage addToCart={addToCart} />}
        />
        <Route 
            path="/history"
            element={<HistoryPage />}
        />
        <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
