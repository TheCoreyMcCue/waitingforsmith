import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { TourDate } from "../components";
import Background from "../assets/tour-background.png";

import useContentful from "./content/useContentful";

const Live = () => {
  const [tourDates, setTourDates] = useState([]);
  const { getTourDates } = useContentful();

  useEffect(() => {
    getTourDates().then((data) => setTourDates(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(tourDates);

  return (
    <Box
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "sticky",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100%",
        filter: `sepia(25%)`,
      }}
    >
      {tourDates.map((date) => (
        <div>
          <TourDate dateInfo={date} />
          <h3>{date.date}</h3>
        </div>
      ))}
    </Box>
  );
};

export default Live;
