import React from "react";

import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { response } from "./placeholderData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePromo = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: "90vh" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {response.blocks.map((block, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <Item>
              <img
                alt=""
                src={block.image}
                style={{ height: "50vh", maxWidth: "80vw" }}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePromo;
