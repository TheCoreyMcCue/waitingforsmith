import React from "react";

import { Box } from "@mui/material";

import { ProductCard } from "../components";

const Merch = () => {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <ProductCard />
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
