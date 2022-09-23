import { Typography, Card } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const BlogPost = ({ blogPosts, blogPage }) => {
  // const blogPhoto = blogPosts[0]?.blogPhoto?.fields?.file?.url

  return (
    <>
      {blogPosts.map((blogPost, index) => (
        <Container key={`blog_index${index}`} style={{ backgroundImage: `url(${blogPage[0]?.background?.fields?.file?.url})`, height: "100%" }}>
          <Card style={{ backgroundImage: `url(${blogPage[0]?.background?.fields?.file?.url})` }}>
            <Typography style={{ fontFamily: "Grotesque", color: "white" }} variant='h3'>{blogPost.blogTitle}</Typography>
            <img alt="" style={{ height: "10rem", width: "auto", zIndex: "100000" }} src={blogPost?.blogPhoto?.fields.file.url} />
            <Typography style={{ fontFamily: "Grotesque", color: "white" }} variant='p'>{blogPost.blogBody}</Typography>
          </Card>
        </Container>
      ))};
    </>
  );
};

export default BlogPost;