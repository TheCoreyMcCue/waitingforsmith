import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

import { commerce } from "./lib/commerce";
import { Navbar } from "./components";

import {
  About,
  BehindTheSong,
  Blog,
  Error,
  Home,
  Live,
  Lyrics,
  Merch,
  Press,
  ShoppingCart,
  StayTuned,
} from "./pages";

function App() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, qty) => {
    const item = await commerce.cart.add(productId, qty);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <Router>
      <Navbar isDesktop={isDesktop} cart={cart} data-testid="navbar" />
      <div style={{ paddingTop: !isDesktop ? 60 : 0 }}>
        <Routes>
          <Route path="/" element={<Home isDesktop={isDesktop} />} />
          <Route path="/about" element={<About />} />
          <Route path="/live" element={<Live />} />
          <Route path="/press" element={<Press />} />
          <Route path="/lyrics" element={<Lyrics />} />
          <Route path="/behindthesong" element={<BehindTheSong />} />
          <Route
            path="/merch"
            element={<Merch products={products} onAddToCart={handleAddToCart} />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/staytuned" element={<StayTuned />} />
          <Route path="/shoppingcart" totalItems={cart.total_items} element={<ShoppingCart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
