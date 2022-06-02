import React, { useEffect, useState } from "react";

import useContentful from "./content/useContentful";

import { HomeHero, HomePromo } from "../components";

const Home = ({ isDesktop }) => {
  const [homePageData, setHomePageData] = useState([]);
  const { getHomePage } = useContentful();

  useEffect(() => {
    getHomePage().then((data) => setHomePageData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(homePageData);
  return (
    <div>
      <HomeHero isDesktop={isDesktop} homePageData={homePageData} />
      <HomePromo />
    </div>
  );
};

export default Home;
