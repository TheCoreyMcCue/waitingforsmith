import React, { useEffect, useState } from "react";

import useContentful from "./content/useContentful";

import { EmailForm, HomeHero, HomePromo, Promotion, Socials } from "../components";
import Live from './Live';
import { AppBar } from "@mui/material";

const Home = ({ isDesktop }) => {
  const [homePageData, setHomePageData] = useState([]);
  const [popUpData, setPopUpData] = useState([]);
  const { getHomePage, getPopUp } = useContentful();
  const instaBackground = homePageData[0]?.instaBackground?.fields?.file?.url
  const promoBackground = homePageData[0]?.promoBackground?.fields?.file?.url

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
      <Promotion promoBackground={promoBackground} />
      <HomePromo instaBackground={instaBackground} />
      {/* "Instagram ^^^" */}
      <Live />
      <EmailForm />
    </div>
  );
};

export default Home;
