import React from 'react';

import { Container, Grid, Typography } from '@mui/material';
import { CartItem } from './'

const FilledCart = ({ cart }) => {
  return (
    <Container>
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
