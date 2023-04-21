import Head from "next/head";
import React, { useEffect } from 'react'
import CodeCardData from "/components/CodeCardData";
import NavBar from "/components/NavBar";
import styles from "/styles/Explore.module.css";
import { Box, Container, Grid } from '@mui/material';
export default function Explore() {

  return (
    
      <>

<Head>
        <title>   
         Explore
          </title>
        <meta
          name="description"
          content="Cod Nap| Cod Nap is the knowledge-sharing community Of Developers."
        />
        
     

      </Head>
<div>
      <NavBar  />
    </div>

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

<CodeCardData/>
      
    </>
  )
}
