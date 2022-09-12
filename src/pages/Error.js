import React, { useState, useEffect } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useContentful from "./content/useContentful";

const Error = () => {
  const [errorPage, setErrorPage] = useState([]);
  const { getErrorPage } = useContentful();
  const navigate = useNavigate();
  const background = errorPage[0]?.background?.fields?.file?.url

  useEffect(() => {
    getErrorPage().then((data) => setErrorPage(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Box
    style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      width: "100vw",
      height: "100vh",
      filter: `sepia(25%)`
    }}
  >
    <Typography variant="h3" style={{
      textAlign: "center",
      color: "white",
      paddingTop: "10%"
    }}>{errorPage[0]?.errorText}</Typography>
    <Button variant="outlined" style={{ margin: "3rem" }} onClick={() => navigate("/")}>
      <ArrowBackIcon />Back Home</Button>
  </Box>;
};

export default Error;
