"use client";
import { useState } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";
import Toolbar from "@mui/material/Toolbar";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Share from "./share";
import Download from "./download";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import EmojiPicker from "emoji-picker-react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Dot from "./dot";
import CardGrid from "../home/cardgrid";
import Subscribe from "./subscribe";
import Paper from "@mui/material/Paper";
export default function App() {
  return (
    <>
      <Toolbar />
      {/* <Toolbar /> */}
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={9.5} xl={9.5}>
          {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> */}
          <MediaPlayer
          autoPlay
            title="Sprite Fight"
            src="/video.mp4"
            poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=980"
            thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
            aspectRatio={16 / 9}
            crossorigin=""
          >
            <Paper elevation={24}>
              <MediaOutlet>
                <MediaPoster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
                <track
                  src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
                  label="English"
                  srcLang="en-US"
                  kind="subtitles"
                  default
                />
                <track
                  src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
                  srcLang="en-US"
                  kind="chapters"
                  default
                />
              </MediaOutlet>
            </Paper>
            <MediaCommunitySkin />
          </MediaPlayer>
          {/* </Grid> */}
          Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film
          {/* <Grid xs={7} sm={7} md={2} lg={3.5} xl={4}> */}
          <Stack direction="row" spacing={0}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="blender.jpg"
                    sx={{ width: 52, height: 52 }}
                  />
                </ListItemAvatar>
                <ListItemText primary="Blender" secondary="1.13M subscribers" />
              </ListItem>
            </List>
            {/* </Grid> */}
            {/* <Grid xs={3} sm={3} md={2} lg={2} xl={2}> */}
            <Subscribe />
          </Stack>
          {/* </Grid> */}
          {/* <Grid xs={3} sm={3} md={2} lg={2.5} xl={3}> */}
          <Fab variant="extended" size="small" sx={{ ml: 0.4 }}>
            <ThumbUpOutlinedIcon sx={{ mr: 1 }} />
            92K |
            <ThumbDownOutlinedIcon sx={{ ml: 1 }} />
            248
          </Fab>
          {/* </Grid> */}
          {/* <Grid xs={3} sm={3} md={2} lg={1} xl={2}> */}
          <Share />
          {/* </Grid> */}
          {/* <Grid xs={3} sm={3} md={2} lg={2} xl={2}> */}
          <Download />
          {/* </Grid> */}
          {/* <Grid xs={1} sm={1} md={1} lg={1} xl={1}> */}
          <Dot />
          {/* </Grid> */}
          {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
             
            </Grid> */}
          {/* <Grid item xs={5} sm={5} md={5} lg={2} xl={8}> */}
          {/* </Grid> */}
          {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
           
              </Grid> */}
          {/* <Grid item xs={6} sm={12} md={12} lg={8.5} xl={8}>
              <Fab variant="extended" size="small">
                <ThumbUpOutlinedIcon sx={{ mr: 1 }} />
                900 |
                <ThumbDownOutlinedIcon sx={{ ml: 1 }} />
                400
              </Fab>
              <Fab variant="extended" size="small">
                <ShareOutlinedIcon sx={{ mr: 1 }} />
                share
              </Fab>
              <Fab variant="extended" size="small">
                <FileDownloadOutlinedIcon sx={{ mr: 1 }} />
                Download
              </Fab>

              <Dot />
            </Grid> */}
          <div>
            {/* <EmojiPicker /> */}
            <TextField
              id="standard-basic"
              label="Add a comment"
              variant="standard"
              fullWidth
            />
          </div>
          9,728 Comments
          <List
          // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a1.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @ShinyFilms
                    </Typography>
                    {" 7 years ago"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      I saw this playing on TV's at the tech stores to show off
                      the quality of the TV's. Not surprised.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a2.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @Seed
                    </Typography>
                    {" 4 months ago"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ah.. The classic test video
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a3.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @mlpfanboy1701
                    </Typography>
                    {" 3 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      “There are three things all wise men fear: a storm at sea,
                      a night with no moon and the anger of a gentle man”
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Alow internet"
                  src="a.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @aaliyahgadon9939
                    </Typography>
                    {"  3 years ago"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      I used to watch this on my old tablet. I miss my childhood
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a4.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @BergsArt
                    </Typography>
                    {" 4 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Comments 90% - Big Chungus 9% - Remembering this as a kid
                      1% - This short was made using free software
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a5.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @Smargin
                    </Typography>
                    {" 5 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      2014: haha what a funny animation 2019: BIG CHUNGUS
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a6.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @Nikku4211
                    </Typography>
                    {" 2 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Wait, so this is actually rendered at 60fps, no AI crap?
                      Awesome.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Slow internet"
                  src="a.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @sergddr
                    </Typography>
                    {"5 years ago  "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Big Chungus: Story mode
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a7.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @Zanderbolt-js4fv
                    </Typography>
                    {"  5 years ago"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Wait,is that..............BIG CHUNGUS?!
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a8.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @progamerzach1
                    </Typography>
                    {" 5 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Saw this before big chungus became a thing.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a9.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @danielsan2142
                    </Typography>
                    {"1 year ago  "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      I remember watching this animation for the first time
                      around 2009 or 2010. It remains one of the most beautiful
                      and well-made animations on the web, with spectacular
                      graphics and a very cool story. Pure masterpiece!
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a10.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @miriamhodges5632
                    </Typography>
                    {" 2 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Me and my little brother used to watch this constantly on
                      this old mp3 player we had, and we even learned the
                      montage music on the piano because it was so fun and
                      catchy. Years later, it came up in conversation, and out
                      of curiosity, I looked up "bumny butterfly animation" and
                      this was the first result. Showed it to my brother today
                      and we laughed hysterically for several minutes. What a
                      throwback.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a11.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @ceweoh
                    </Typography>
                    {"5 years ago  "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      This Big Chungus for the PS4 gameplay is so good
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a12.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @ElijahCiali
                    </Typography>
                    {" 4 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Blender: makes a free movie Every coding website: it’s
                      free real estate
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a13.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @octolin6007
                    </Typography>
                    {" 3 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      this movie: exists everyone: meme approved
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a14.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @Reehatk
                    </Typography>
                    {"  11 months ago"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      I used to watch this all the time as a kid. I was so
                      young, while my parents fed me I just lay in their lap
                      watching this on the phone. I was only 1 or 2 years old
                      back then, now as I'm watching this again, it brings back
                      so much memories. God I love this
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a15.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @bigburd875
                    </Typography>
                    {" 5 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Big Chungus confronts kids who made fun of him
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a16.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @lilchickenwing3955
                    </Typography>
                    {" 5 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      95% of comments: big chungus 5% of comments: remember
                      watching this as a kid
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a17.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @sergeantsapient
                    </Typography>
                    {" 3 months ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Amazing how well this holds up so many years later.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a18.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @kanikabhatia9865
                    </Typography>
                    {"3 years ago  "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      It feels so good seeing the graphics and emotions in this
                      film. I respect this kind of work a lot. Keep it up.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a19.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @themanofmilk6394
                    </Typography>
                    {" 5 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Big chungus 2: chungus takes revenge on forest creatures
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a20.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @chickensanders7870
                    </Typography>
                    {"  5 years ago (edited)"}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      The gameplay of my Big Chungus trailer XD
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Mlow internet"
                  src="a.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @May-gr8bp
                    </Typography>
                    {" 2 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      my friend introduced this today as a tradition that she
                      has, to watch every so often. this is a good film
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a21.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @NyxLikesCats
                    </Typography>
                    {"8 months ago  "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      out of 5 "not violent enough, i wanted to see that flying
                      squirrel get impaled I a going to teach myself blender so
                      I can fix the ending"
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Jlow internet"
                  src="a.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @josfedomi4087
                    </Typography>
                    {"5 years ago  "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Big Chungus Remastered
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a22.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @cannibalcandyy
                    </Typography>
                    {"3 years ago  "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      I have a CD of this animation. When or why I have it is
                      unknown.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a23.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @papajohns1533
                    </Typography>
                    {"3 years ago  "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Oké so I’ve been looking for this bunny for 6 years now
                      because I always thought it was fun on my Nintendo 3ds,
                      thank god I found this
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a24.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @mysteriousvoice907
                    </Typography>
                    {" 2 years ago "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      i came back to watch this after 6 years and oh my god i
                      forgot how comicly dark this was
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="slow internet"
                  src="a25.jpg"
                  sx={{ width: 52, height: 52 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @yeetnoodle9668
                    </Typography>
                    {"1 year ago  "}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      This is nostalgic, I now have Blender and I aspire to be
                      as this good
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>

        <Grid container xs={12} sm={12} md={12} lg={2.5} xl={ 2.5}>
          <CardGrid />
        </Grid>
      </Grid>
    </>
  );
}
