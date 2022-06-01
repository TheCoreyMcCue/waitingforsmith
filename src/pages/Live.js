import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { TourDate } from "../components";

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
        backgroundImage: `url(https://scontent-amt2-1.xx.fbcdn.net/v/t39.30808-6/237129931_3009502729262810_1070396645507000933_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=KDDo2rvLEfIAX_rKfB8&tn=XJ6TtWPEEJkapElg&_nc_ht=scontent-amt2-1.xx&oh=00_AT8VGC2Pub18_zAyU-WQdUcoyfHr_EGh-OYYG89Ac3bvxA&oe=629C6700)`,
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
