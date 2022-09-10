import React from "react";

import { Box, Paper, Grid, Typography } from "@mui/material";
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

const HomePromo = ({ instaBackground }) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${instaBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        marginBottom: "-5%",
        paddingBottom: "5%",
        width: "100vw",
        height: "100%",
        filter: `sepia(25%)`
      }} sx={{ flexGrow: 1, minHeight: "90vh" }}>
      <Typography style={{ textAlign: "center" }} color="white" variant="h2"> Instagram Section</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {response.blocks.map((block, index) => (
          <Grid style={{ backgroundColor: { instaBackground } }} item xs={12} sm={12} md={6} key={index}>
            <Item style={{
              backgroundImage: `url(${instaBackground})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              filter: `sepia(25%)`
            }}>
              <img
                alt=""
                src={block.image}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
            </Item>
          </Grid>
        ))};
      </Grid>
    </Box>
  );
};

export default HomePromo;
