import React from "react";
import { Container } from "@mui/material";

import { EmptyCart, FilledCart } from "../components";

const ShoppingCart = ({ cart }) => {

  return (
    <Container>
      {cart?.total_items < 1 ? <EmptyCart /> : <FilledCart cart={cart} />}
    </Container>
  )
};

export default ShoppingCart;
