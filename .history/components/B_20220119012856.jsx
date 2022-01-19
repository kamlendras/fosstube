import React from "react";
import Link from "next/link";
// import styles from "../styles/Home.module.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import QuickreplyRoundedIcon from '@mui/icons-material/QuickreplyRounded';
import styles from "/styles/Nav.module.scss";
import Grid from '@mui/material/Grid';

export default function B() {
 
  return (

    <div>
     
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>


    
   
      
       
          <span>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <span
                  style={{ fontSize: "10" }}
                  onClick={toggleDrawer(anchor, true)}
                >
                  {anchor}
                 
                </span>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </span></Grid>

          <Grid item xs={1}>
          <Link href="/Code" passHref>
            <button className={styles.Code}><CodeRoundedIcon className={styles.i2}/> Code</button>
          </Link></Grid>
          <Grid item xs={1}>
          <Link href="/Courses" passHref>
            <button className={styles.Courses}><BookRoundedIcon className={styles.i3}/>Courses</button>
          </Link></Grid>
          <Grid item xs={1}>
          <Link href="/Explore" passHref>
            <button className={styles.explore}><ExploreRoundedIcon className={styles.i4}/> Explore</button>
          </Link></Grid>
          <Grid item xs={1}>
          <Link href="/Ask" passHref>
            <button className={styles.Ask}><QuickreplyRoundedIcon className={styles.i5}/>  Ask</button>
          </Link></Grid>
          </Grid>
    </Box>
    </div>
      
    
  );
}
