import React from 'react';
import BlogItem from './BlogItem';
import { Container } from '@mui/material';

export default function Blogs({ blogs }) {
  return (
    <Container
      maxWidth={false}
      className="flex justify-around flex-wrap gap-6 my-16"
    >
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </Container>
  );
}
