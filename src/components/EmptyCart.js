import React from 'react';

import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography>Your Cart is empty</Typography>
      <Button onClick={() => navigate("/merch")}>back to the shop</Button>
    </Container>
  )
}

export default EmptyCart;
