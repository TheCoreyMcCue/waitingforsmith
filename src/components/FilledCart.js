import React from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { CartItem } from './'


const FilledCart = ({ cart }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant='h2'>Your Cart:</Typography>
      <Button onClick={() => navigate("/merch")}>Back to shop</Button>
      <Grid>
        {cart?.line_items?.map((item, index) =>
          <CartItem key={index} item={item} cart={cart} />
        )}
        <Typography>Subtotal: {cart?.subtotal?.formatted_with_symbol}</Typography>
      </Grid>
    </Container>
  )
}

export default FilledCart;
