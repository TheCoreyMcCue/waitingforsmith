import React from "react";
import { Container } from "@mui/material";

import { EmptyCart, FilledCart } from "../components";

const ShoppingCart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  return (
    <Container>
      {cart?.total_items < 1 ? <EmptyCart /> : <FilledCart handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} cart={cart} />}
    </Container>
  )
};

export default ShoppingCart;
