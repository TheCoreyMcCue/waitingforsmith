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
  StayTuned
} from "./pages";

function App() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("🚀 ~ file: App.js ~ line 34 ~ useEffect ~ products", products);

  return (
    <Router>
      <Navbar isDesktop={isDesktop} />
      <Routes>
        <Route path="/" element={<Home isDesktop={isDesktop} />} />
        <Route path="/about" element={<About />} />
        <Route path="/live" element={<Live />} />
        <Route path="/press" element={<Press />} />
        <Route path="/lyrics" element={<Lyrics />} />
        <Route path="/behindthesong" element={<BehindTheSong />} />
        <Route path="/merch" element={<Merch products={products} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/staytuned" element={<StayTuned />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
