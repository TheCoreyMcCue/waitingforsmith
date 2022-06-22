import React from "react";

import { Box } from "@mui/material";

import { ProductCard } from "../components";

const Merch = ({ products }) => {
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
        <ProductCard product={product} key={index} />
      ))}
    </Box>
  );
};

export default Merch;
