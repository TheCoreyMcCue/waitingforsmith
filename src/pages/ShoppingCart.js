import React from "react";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ cart }) => {
  const navigate = useNavigate();

  {
    cart?.total_items < 1 && (
      <div>
        <div>Your Cart is empty</div>
        <Button onClick={() => navigate("/merch")}>back to the shop</Button>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "300px" }}>
      hiiii
    </div>
  )
};

export default ShoppingCart;
