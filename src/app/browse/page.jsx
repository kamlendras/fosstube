import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '../../components/browse/card'
import Toolbar from '@mui/material/Toolbar';
export default function CenteredElementGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar/>
      <Grid container spacing={2} minHeight={160}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Card  />
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Card />
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Card />
        </Grid>
      </Grid>
      <Grid container spacing={2} minHeight={160}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar  />
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Avatar />
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar />
        </Grid>
      </Grid>
    </Box>
  );
}
