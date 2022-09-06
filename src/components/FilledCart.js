import React from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { CartItem } from './'


const FilledCart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant='h2'>Your Cart:</Typography>
      <Button onClick={() => navigate("/merch")}>Back to shop</Button>
      <Grid>
        {cart?.line_items?.map((item, index) =>
          <CartItem key={index} item={item} cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
        )}
        <Typography>Subtotal: {cart?.subtotal?.formatted_with_symbol}</Typography>
        <Button onClick={() => handleEmptyCart()}>Empty Cart</Button>
      </Grid>
    </Container>
  )
}

export default FilledCart;
