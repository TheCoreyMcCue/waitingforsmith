import React, { useEffect, useState } from "react";

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
    <div>
      {tourDates.map((date) => (
        <div>
          <TourDate dateInfo={date} />
          <h3>{date.date}</h3>
        </div>
      ))}
    </div>
  );
};

export default Live;