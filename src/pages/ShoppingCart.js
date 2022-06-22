import React from "react";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>ShoppingCart</div>
      <Button onClick={() => navigate("/merch")}>back to the shop</Button>
    </div>
  );
};

export default ShoppingCart;
