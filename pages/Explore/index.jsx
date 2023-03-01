import Head from "next/head";
import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import CodeCardData from "/components/CodeCardData";
import NavBar from "/components/NavBar";
import styles from "/styles/Explore.module.css";
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '/components/dashboard/budget';
import { TasksProgress } from '/components/dashboard/tasks-progress';
import { TotalCustomers } from '/components/dashboard/total-customers';
import { TotalProfit } from '/components/dashboard/total-profit';
export default function Explore() {

  return (
    
      <>

<Head>
        <title>   
         Explore - CodNap
          </title>
        <meta
          name="description"
          content="Cod Nap| Cod Nap is the knowledge-sharing community Of Developers."
        />
        
     

      </Head>
<div>
      <NavBar p={"static"}  />
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
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
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
