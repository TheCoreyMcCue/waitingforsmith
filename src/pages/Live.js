import React, { useEffect, useState } from "react";

import useContentful from "./content/useContentful";

const Live = () => {
  const [tourDates, setTourDates] = useState([]);
  const { getTourDates } = useContentful();

  useEffect(() => {
    getTourDates().then((data) => console.log(data));
  });

  return <div>Live</div>;
};

export default Live;
