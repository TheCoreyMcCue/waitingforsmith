import React, { useEffect, useState } from "react";

import { BlogPost } from "../components";
import useContentful from "./content/useContentful";

const Blog = () => {
  const [blogPage, setBlogPage] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const { getBlogPage, getBlogPosts } = useContentful();

  useEffect(() => {
    getBlogPage().then((data) => setBlogPage(data));
    getBlogPosts().then((data) => setBlogPosts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const backgroundPicture = blogPage[0]?.background?.fields?.file?.url

  return <div style={{ backgroundImage: `url(${blogPage[0]?.background?.fields?.file?.url})`, height: "100%" }}>
    <img alt="" src={backgroundPicture} style={{ height: "100vh", width: "100vw", objectFit: "cover", overflow: "hidden", position: "fixed", opacity: "50%", zIndex: "-1" }} />
    <BlogPost blogPosts={blogPosts} blogPage={blogPage} style={{ zIndex: "1000" }} />
  </div>;
};

export { Blog };
