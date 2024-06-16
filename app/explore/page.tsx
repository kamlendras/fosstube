
import React from 'react'
import Codecarddata from "../_components/codecarddata";

import styles from "../_styles/Explore.module.css";
import { Box, Container, Grid } from '@mui/material';
export const metadata = {
  title: "Explore - FossTube",
  description: "Open & Decentralized",
};
export default function Explore() {

  return (
    
      <>




    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
        <p>hello1</p>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
         <p>h2</p>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
          <p>h3</p>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
        <p>h4</p>
          </Grid>
      
         
       
        </Grid>
      </Container>
    </Box>
   
<div className={styles.block}>
  <h1 className={styles.bo}>TRENDING</h1></div>

<Codecarddata/>
      
    </>
  )
}
