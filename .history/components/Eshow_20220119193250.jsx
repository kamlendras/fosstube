import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../styles/Explore.module.css";
import Image from 'next/image'
import Link from 'next/link'
export default function Eshow() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={3} sm={4} md={3}>
     
            <Box className={styles.eshow}
              sx={{
                boxShadow: 3,
                bgcolor: "background.paper",
                m: 1,
                p: 1,
                borderRadius: "6px",
                background: "#03a9f4",
                color: "white",
              }}
            > <center>  
              
                <Image
                  className={styles.eshow1img}
                  height={56}
                  alt="Remy Sharp"
                  src="/bulb.png" width={10} 
                />
                <div className={styles.eshow1text}>Learning</div>
             </center>
            </Box>
          
        </Grid>
        <Grid item xs={3} sm={4} md={3}>
          
            <Box className={styles.eshow}
              sx={{
                boxShadow: 3,
                bgcolor: "background.paper",
                m: 1,
                p: 1,
                borderRadius: "6px",
                background: "#03a9f4",
              color: "white",
              }}
            > <center> 
             
                <Image
                  className={styles.eshow2img}
                  height={56}
                  alt="Remy Sharp"
                  src="/ideas.png"  width={10} 
                />

                <div className={styles.eshow2text}>Quiz</div>
              </center>
            </Box>
         
        </Grid>
        <Grid item xs={3} sm={4} md={3}>
        
            <Box className={styles.eshow}
              sx={{
                boxShadow: 3,
                bgcolor: "background.paper",
                m: 1,
                p: 1,
                borderRadius: "6px",
                background: "#03a9f4",
              color: "white",
              }}
            ><center>
              <Image
                className={styles.eshow3img}
                height={56}
                alt="Remy Sharp"
                src="/quiz.png"  width={10} 
              />

              <div className={styles.eshow3text}>Certificate</div></center>
            </Box>
          
        </Grid>
        <Grid item xs={3} sm={4} md={3}>
          
          <Box className={styles.eshow}
            sx={{
              boxShadow: 3,
              bgcolor: "background.paper",
              m: 1,
              p: 1,
              borderRadius: "6px",
              background: "#03a9f4",
              color: "white",
            }}
          ><center>
            <Image
              className={styles.eshow4img}
              height={56}
              alt="Remy Sharp"
              src="/businessman.png" 
            />

            <div className={styles.eshow4text}>   Jobs</div></center>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
