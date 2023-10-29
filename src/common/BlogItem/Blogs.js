import React from 'react';
import BlogItem from './BlogItem';
import { Container } from '@mui/material';
import Grid from "@mui/material/Grid";

export default function Blogs({ blogs }) {
  return (
    <div
      maxWidth={false}
      className="flex justify-around gap-3 my-3 md:my-7 mx-5 lg:mx-20"
    >
      <Grid container spacing={{ xs: 2, sm: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {blogs.map((blog, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <BlogItem key={blog.id} blog={blog} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
