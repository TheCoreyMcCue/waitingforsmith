import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import { EmptyCart, FilledCart } from "../components";
import useContentful from "./content/useContentful";

const ShoppingCart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const [background, setBackground] = useState([]);
  const { getCartPage } = useContentful();

  useEffect(() => {
    getCartPage().then((data) => setBackground(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backgroundImg = background[0]?.background?.fields?.file?.url
  return (
    <Container>
      <img src={backgroundImg} alt={background[0]?.background?.fields?.title} style={{ height: "100vh", zIndex: "-1", left: 0, width: "100vw", objectFit: "cover", overflow: "hidden", position: "fixed", opacity: "60%" }} />
      {cart?.total_items < 1 ? <EmptyCart /> : <FilledCart handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} cart={cart} />}
    </Container>
  )
};

export default ShoppingCart;
