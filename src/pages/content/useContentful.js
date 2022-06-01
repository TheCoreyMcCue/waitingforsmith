import { createClient } from "contentful";

const useContentful = () => {
  const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN;

  const client = createClient({
    space: space,
    accessToken: accessToken,
    host: "preview.contentful.com",
  });

  const getTourDates = async () => {
    try {
      const tourDates = await client.getEntries({
        content_type: "tourDates",
        select: "fields",
      });
      const sanitizedTourDates = tourDates.items.map((item) => {
        return {
          ...item.fields,
        };
      })
      return sanitizedTourDates;
    } catch (error) {
      console.log(`error fetching tour dates: ${error}`);
    }
  };
  return { getTourDates };
};

export default useContentful;
