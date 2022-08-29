import React from "react";
import { Button, Typography, Container } from "@mui/material";

import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ cart }) => {
  const navigate = useNavigate();
  cart?.total_items < 1 && (
    <Container>
      <Typography>Your Cart is empty</Typography>
      <Button onClick={() => navigate("/merch")}>back to the shop</Button>
    </Container>
  )
  return (
    <Container>
      <p>hiiii</p>
    </Container>
  )
};

export default ShoppingCart;
