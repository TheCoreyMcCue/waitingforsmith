import React from "react";

import { Box } from "@mui/material";

import { ProductCard } from "../components";

const Merch = ({ products, onAddToCart }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "1rem",
      }}
    >
      {products.map((product, index) => (
        <ProductCard product={product} key={index} onAddToCart={onAddToCart} />
      ))}
    </Box>
  );
};

export default Merch;
