import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
export default function Types() {
  return (
 
          <Grid container rowSpacing={0} columnSpacing={20}   alignItems="center"  style={{margin:'1rem'}}
  justifyContent="center">
        <Grid xs={12}>
      <Typography variant="h1" gutterBottom>
      About FossTube
      </Typography>
      </Grid>
      <Grid xs={12}>
      <Typography variant="h2" gutterBottom>
      Our mission is to give everyone a Power to Code The World.
      </Typography>
      </Grid>
      <Grid xs={12}>
      <Typography variant="h2" gutterBottom>
      We believe that everyone deserves to have a Open Source,
       and that the world is a better place when we contribute to it and make it accessible for Everyone.
      </Typography>
      </Grid>
    
      </Grid>
   
  );
}
