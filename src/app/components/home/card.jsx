"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { useState } from "react";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Grid from '@mui/material/Unstable_Grid2';
import Dot from'./dot';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import HoverVideoPlayer from 'react-hover-video-player';




const theme = createTheme();
theme.typography.h1 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    fontFamily: 'Arial',
  
  },
};
theme.typography.h2 = {
  fontSize: '0.9rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
    fontFamily: ' Arial',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
    fontFamily: 'Arial',
  
  },
};



export default function RecipeReviewCard() {


  return (
    <>
   
    <Card sx={{ width: 310, height: 185, borderRadius: 2}}  >
  
      <HoverVideoPlayer
  videoSrc="/v.mp4"
  // We should display an image over the video while it is paused
  pausedOverlay={
    <img
      src="/i.jpg"
      alt=""
      // style={{
      //   // Make the image expand to cover the video's dimensions
      //   width: '310',
      //   height: '200',
      //   // objectFit: 'fill',
      // }}
    />
  }
/>
     
    </Card>

     <Grid container columnSpacing={0} rowSpacing={0} sx={{ width: 310, height: 100}}   className="downnail" >
          <Grid xs={2}>
          <Avatar
  alt="Remy Sharp"
  src="/avatar.svg"
  
/>
            </Grid>

          <Grid xs={8}>
            <Grid xs={12} >
            <ThemeProvider theme={theme}>
            <Typography variant="h1" gutterBottom  style={{color: 'black'}} className='textoverflow'
            // sx={{fontWeight: 'bold'}}
            >
            Build and Deploy Your Own ChatGPT AI App in JavaScript | OpenAI, Machine Learning
      </Typography>
      </ThemeProvider>
            </Grid>
            <Grid xs={12}>
            <ThemeProvider theme={theme}>
            <Typography variant="h2" gutterBottom  style={{color: '#606060'}}
            // sx={{fontWeight: 'bold'}}
            >
             Geography Now <CheckCircleIcon style={{fontSize:'1rem'}}/>
      </Typography>
      </ThemeProvider>
             
            </Grid>
            <Grid xs={12}>
            <ThemeProvider theme={theme}>
            <Typography variant="h2" gutterBottom  style={{color: '#606060'}}
            // sx={{fontWeight: 'bold'}}
            >
             919K views <CircleIcon style={{fontSize:'4'}}/> 6 years ago
      </Typography>
      </ThemeProvider>
             
            </Grid>
         
            </Grid>
           <Grid xl={0.5}>  
         
            <Dot/>
          
          </Grid>
          </Grid>
     
      
    </>
  );
}