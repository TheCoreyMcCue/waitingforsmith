import { Typography, Card } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const BlogPost = ({ blogPosts }) => {

  return (
    <>
      {blogPosts.map((blogPost) => (
        <Container>
          <Card>
            <Typography variant='h3'>{blogPost.blogTitle}</Typography>
            <Typography variant='p'>{blogPost.blogBody}</Typography>
          </Card>
        </Container>
      ))}
    </>
  )
}

export default BlogPost;