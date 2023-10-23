import React from 'react';
import SchoolItem from './SchoolItem';
import Grid from "@mui/material/Grid";

export default function SchoolList({ schools }) {
  return (
    <Grid container spacing={{ xs: 2, md: 3, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {schools.map((school, index) => (
        <Grid item xs={4} sm={4} md={3} key={index}>
          <SchoolItem key={index} school={school} />
        </Grid>
      ))}
    </Grid>
  );
}
