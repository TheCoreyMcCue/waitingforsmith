import React from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { CartItem } from './'


const FilledCart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, isDesktop }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant='h2'>Your Cart:</Typography>
      <Button onClick={() => navigate("/merch")}>Back to shop</Button>
      <Grid>
        {cart?.line_items?.map((item, index) =>
          <CartItem key={index} item={item} cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} isDesktop={isDesktop} />
        )}
        <Typography>Subtotal: {cart?.subtotal?.formatted_with_symbol}</Typography>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15%" }}>
          <Button onClick={() => handleEmptyCart()}>Empty Cart</Button>
          <Button>Continue to Checkout</Button>
        </div>
      </Grid>
    </Container>
  )
}

export default FilledCart;
