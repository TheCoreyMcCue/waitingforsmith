import React from "react";

import { Button } from "@mui/material";

import { HomeHero } from "../components";

const Home = ({ isDesktop }) => {
  return (
    <div>
      <HomeHero isDesktop={isDesktop} />
      <Button>Pre-Save</Button>
    </div>
  );
};

export default Home;
