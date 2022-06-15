import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN,
    host: "preview.contentful.com",
  });

  const getTourDates = async () => {
    try {
      const tourDates = await client.getEntries({
        content_type: "tourDates",
        select: "fields",
        order: "fields.tourDate",
      });
      const sanitizedTourDates = tourDates.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedTourDates;
    } catch (error) {
      console.log(`error fetching tour dates: ${error}`);
    }
  };
  const getTour = async () => {
    try {
      const tour = await client.getEntries({
        content_type: "tour",
        select: "fields",
      });
      const sanitizedTour = tour.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedTour;
    } catch (error) {
      console.log(`error fetching tour dates: ${error}`);
    }
  };
  const getHomePage = async () => {
    try {
      const homePage = await client.getEntries({
        content_type: "homePage",
        select: "fields",
      });
      const sanitizedHomePage = homePage.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedHomePage;
    } catch (error) {
      console.log(`error fetching home page data: ${error}`);
    }
  };
  const getPopUp = async () => {
    try {
      const popUp = await client.getEntries({
        content_type: "popUp",
        select: "fields",
      });
      const sanitizedPopUp = popUp.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedPopUp;
    } catch (error) {
      console.log(`error fetching pop up data: ${error}`);
    }
  };
  return { getTourDates, getHomePage, getPopUp, getTour };
};

export default useContentful;
