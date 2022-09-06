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
      console.log(`error fetching tour: ${error}`);
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
  const getAboutPage = async () => {
    try {
      const about = await client.getEntries({
        content_type: "aboutPage",
        select: "fields",
      });
      const sanitizedAbout = about.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedAbout;
    } catch (error) {
      console.log(`error fetching pop up data: ${error}`);
    }
  };
  const getBlogPage = async () => {
    try {
      const blogPage = await client.getEntries({
        content_type: "blogPage",
        select: "fields",
      });
      const sanitizedBlogPage = blogPage.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedBlogPage;
    } catch (error) {
      console.log(`error fetching pop up data: ${error}`);
    }
  };
  const getBlogPosts = async () => {
    try {
      const blogPost = await client.getEntries({
        content_type: "blogPost",
        select: "fields",
      });
      const sanitizedBlogPost = blogPost.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedBlogPost;
    } catch (error) {
      console.log(`error fetching pop up data: ${error}`);
    }
  };
  const getMerchPage = async () => {
    try {
      const merchPage = await client.getEntries({
        content_type: "merchPage",
        select: "fields",
      });
      const sanitizedMerchPage = merchPage.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedMerchPage;
    } catch (error) {
      console.log(`error fetching pop up data: ${error}`);
    }
  };
  const getCartPage = async () => {
    try {
      const cartPage = await client.getEntries({
        content_type: "cartPage",
        select: "fields",
      });
      const sanitizedCartPage = cartPage.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedCartPage;
    } catch (error) {
      console.log(`error fetching pop up data: ${error}`);
    }
  };
  return {
    getAboutPage,
    getBlogPage,
    getBlogPosts,
    getCartPage,
    getHomePage,
    getMerchPage,
    getPopUp,
    getTour,
    getTourDates
  };
};

export default useContentful;
