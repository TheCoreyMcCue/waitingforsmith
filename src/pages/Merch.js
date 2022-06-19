import React from "react";

import { Box } from "@mui/material";

import { ProductCard } from "../components";

const Merch = ({ products }) => {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {products.map((product) => (
        <ProductCard product={product} />)
      )}
      <ProductCard  />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Box>
  );
};

export default Merch;
