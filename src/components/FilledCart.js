import React, { useState, useEffect } from 'react';

import { Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { CartItem } from './'


const FilledCart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, isDesktop }) => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

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
    loading || !Boolean(cart.line_items) ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><CircularProgress style={{ marginTop: "10%" }} /></div> :
      <Container>
        <Typography style={{ textAlign: "center" }} color="white" variant="h2">Your Cart:</Typography>
        <Button variant="outlined" style={{ marginBottom: "1rem" }} onClick={() => navigate("/merch")}><ArrowBackIcon />Back to shop</Button>
        <Grid>
          {cart?.line_items?.map((item, index) =>
            <CartItem loading={loading} setLoading={setLoading} key={index} item={item} cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} isDesktop={isDesktop} />
          )}
          <Typography>Subtotal: {cart?.subtotal?.formatted_with_symbol}</Typography>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15%" }}>
            <Button variant="outlined" onClick={() => emptyCart()}>Empty Cart</Button>
            <Button variant="outlined" onClick={() => navigate("/checkout")} >Continue to Checkout</Button>
          </div>
        </Grid>
      </Container >
  )
}

export default FilledCart;
