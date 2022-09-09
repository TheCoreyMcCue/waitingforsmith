import React, { useEffect, useState } from "react";

import useContentful from "./content/useContentful";

import { HomeHero, HomePromo, Promotion, Socials } from "../components";
import { AppBar } from "@mui/material";

const Home = ({ isDesktop }) => {
  const [homePageData, setHomePageData] = useState([]);
  const [popUpData, setPopUpData] = useState([]);
  const { getHomePage, getPopUp } = useContentful();

  useEffect(() => {
    getHomePage().then((data) => setHomePageData(data));
    getPopUp().then((data) => setPopUpData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HomeHero
        isDesktop={isDesktop}
        homePageData={homePageData}
        popUpData={popUpData}
      />
      <AppBar style={{
        height: "1px",
        backgroundColor: 'transparent', top: "200px",
        boxShadow: 'none', color: "black", position: "sticky",
      }}>

        <Socials />
      </AppBar>
      <Promotion />
      <HomePromo />
      {/* "Instagram ^^^" */}
    </div>
  );
};

export default Home;
