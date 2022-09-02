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

  return <div>
    <img alt="" src={backgroundPicture} style={{ height: "100vh", width: "100vw", objectFit: "cover", overflow: "hidden", position: "fixed", opacity: "50%" }} />
    <BlogPost blogPosts={blogPosts} />
  </div>;
};

export default Blog;
