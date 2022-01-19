import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function RowAndColumnSpacing() {
  return (
      <div className='welcome'>
    <Box sx={{ width: '50%' }}>
      <Grid container rowSpacing={2} columnSpacing={ {xs: 1, sm: 2, md: 3}}>
        <Grid item xs={6}>
        <Box className="eshow"
              sx={{
                boxShadow: 3,
                bgcolor: "background.paper",
                m: 1,
                p: 1,
                borderRadius: "6px",
                background: "#2196f3",
                color: "white",
              }}
            > <center>  
              
                <img
                  className="eshow1img"
                  height={56}
                  alt="Remy Sharp"
                  src="/img/coding-language.png"
                />
                <div className="eshow1text">Code</div>
             </center>
            </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className="eshow"
              sx={{
                boxShadow: 3,
                bgcolor: "background.paper",
                m: 1,
                p: 1,
                borderRadius: "6px",
                background: "#2196f3",
                color: "white",
              }}
            > <center>  
              
                <img
                  className="eshow1img"
                  height={56}
                  alt="Remy Sharp"
                  src="/img/teach.png"
                />
                <div className="eshow1text">Courses</div>
             </center>
            </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className="eshow"
              sx={{
                boxShadow: 3,
                bgcolor: "background.paper",
                m: 1,
                p: 1,
                borderRadius: "6px",
                background: "#2196f3",
                color: "white",
              }}
            > <center>  
              
                <img
                  className="eshow1img"
                  height={56}
                  alt="Remy Sharp"
                  src="/img/internet-explorer.png"
                />
                <div className="eshow1text">Explore</div>
             </center>
            </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className="eshow"
              sx={{
                boxShadow: 3,
                bgcolor: "background.paper",
                m: 1,
                p: 1,
                borderRadius: "6px",
                background: "#2196f3",
                color: "white",
              }}
            > <center>  
              
                <img
                  className="eshow1img"
                  height={56}
                  alt="Remy Sharp"
                  src="/img/chat.png"
                />
                <div className="eshow1text">Ask</div>
             </center>
            </Box>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
