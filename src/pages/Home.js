import React, { useEffect, useState } from "react";

import useContentful from "./content/useContentful";

import { HomeHero, HomePromo } from "../components";

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
      <HomePromo />
    </div>
  );
};

export default Home;
