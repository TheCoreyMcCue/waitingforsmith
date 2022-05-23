import React from "react";

import { HomeHero, HomePromo } from "../components";

const Home = ({ isDesktop }) => {
  return (
    <div>
      <HomeHero isDesktop={isDesktop} />
      <HomePromo />
    </div>
  );
};

export default Home;
