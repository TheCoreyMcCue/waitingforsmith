import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { TourDate } from "../components";

import useContentful from "./content/useContentful";
import { Typography } from "@mui/material";

const Live = () => {
  const [tourDates, setTourDates] = useState([]);
  const [tour, setTour] = useState([]);
  const { getTourDates, getTour } = useContentful();

  useEffect(() => {
    getTourDates().then((data) => setTourDates(data));
    getTour().then((data) => setTour(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      style={{
        backgroundImage: `url(${tour[0]?.backgroundImage.fields.file.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        marginBottom: "-5%",
        paddingBottom: "5%",
        width: "100vw",
        height: "100%",
        filter: `sepia(25%)`,
      }}
    >
      <Typography style={{ textAlign: "center" }} color="white" variant="h2">Live</Typography>

      {tourDates.map((date, index) => (
        <div>
          <TourDate key={`live-date-${index}`} dateInfo={date} />
        </div>
      ))}
    </Box>
  );
};

export default Live;
