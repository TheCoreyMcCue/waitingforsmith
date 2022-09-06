import React, { useState, useEffect } from 'react';

import { Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { CartItem } from './'


const FilledCart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, isDesktop }) => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  console.log(!Boolean(cart.line_items))

  useEffect(() => {
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emptyCart = async () => {
    setLoading(true)
    await handleEmptyCart()
    setLoading(false)
  }

  return (
    loading || !Boolean(cart.line_items) ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><CircularProgress /></div> :
      <Container>
        <Typography variant='h2'>Your Cart:</Typography>
        <Button onClick={() => navigate("/merch")}>Back to shop</Button>
        <Grid>
          {cart?.line_items?.map((item, index) =>
            <CartItem loading={loading} setLoading={setLoading} key={index} item={item} cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} isDesktop={isDesktop} />
          )}
          <Typography>Subtotal: {cart?.subtotal?.formatted_with_symbol}</Typography>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15%" }}>
            <Button onClick={() => emptyCart()}>Empty Cart</Button>
            <Button onClick={() => window.location.reload(false)}>Continue to Checkout</Button>
          </div>
        </Grid>
      </Container>
  )
}

export default FilledCart;
