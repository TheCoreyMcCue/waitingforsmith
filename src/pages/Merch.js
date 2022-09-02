import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";

import { ProductCard } from "../components";
import useContentful from "./content/useContentful";


const Merch = ({ products, onAddToCart }) => {
  const [merchPage, setMerchPage] = useState([]);
  const { getMerchPage } = useContentful();


  useEffect(() => {
    getMerchPage().then((data) => setMerchPage(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const background = merchPage[0]?.background?.fields?.file?.url

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <img src={background} alt="" style={{ height: "100vh", width: "100vw", objectFit: "cover", overflow: "hidden", position: "fixed", opacity: "60%", zIndex: "-1" }} />
      {products.map((product, index) => (
        <ProductCard product={product} key={index} onAddToCart={onAddToCart} />
      ))}
    </Box>
  );
};

export default Merch;
