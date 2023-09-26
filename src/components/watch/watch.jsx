"use client"
import { useState } from "react";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import 'vidstack/styles/defaults.css';
import 'vidstack/styles/community-skin/video.css';
import Toolbar from '@mui/material/Toolbar';
import { MediaCommunitySkin, MediaOutlet, MediaPlayer, MediaPoster } from '@vidstack/react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import EmojiPicker from 'emoji-picker-react';
import TextField from '@mui/material/TextField';
export default function App() {
  const [showMore, setShowMore] = useState(false);
  const {text} = "knsdknknksjnkvd"
  return (
    <>
    <Toolbar/>
    <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <MediaPlayer
    title="Sprite Fight"
    src="/2.mp4"
    poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=980"
    thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
    aspectRatio={16 / 9}
    crossorigin=""
  >
    <MediaOutlet>
      <MediaPoster
        alt="Girl walks into sprite gnomes around her friend on a campfire in danger!"
      />
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
    <MediaCommunitySkin />
  </MediaPlayer>


        Baalam Gunda (Official Video) | Fiza Choudhary, Tushar Goel | New Haryanvi Songs Haryanavi 2023
<Grid container>
<Grid item xs={12} sm={12} md={12} lg={3.5} xl={2}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="AMOGYA MUSIC" secondary="9.25K subscribers" />
        </ListItem>
       
       
      </List>
      </Grid>
      <Grid item xs={5} sm={5} md={5} lg={2} xl={8}>
    <Fab variant="extended" size="small" color="white">
          
          subscribe
        </Fab></Grid>
      <Grid item xs={12} sm={12} md={12} lg={7} xl={8}>


        <Fab variant="extended" size="small">
          <ThumbUpOutlinedIcon sx={{ mr: 1 }} />
          900 |  
  
          <ThumbDownOutlinedIcon sx={{ ml: 1 }}/>
        </Fab>
        <Fab variant="extended" size="small">
          <ShareOutlinedIcon sx={{ mr: 1 }} />
          share
        </Fab>
        <Fab variant="extended" size="small">
          <FileDownloadOutlinedIcon sx={{ mr: 1 }} />
          Download
        </Fab>
        <Fab  size="small">
          <MoreHorizOutlinedIcon  />
        
        </Fab>
        </Grid>
        </Grid>

        <div>
        {/* <EmojiPicker /> */}
        <TextField id="standard-basic" label="Add a comment" variant="standard" fullWidth/>
      </div>
      9,728 Comments
  
      <List 
      // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      >
        
        
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                
  @izaiahtilton7019 
                </Typography>
                {" 2 weeks ago"}
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
               I never comment on anything - but this is the kind of content that I keep coming back to YouTube for. This is what it’s all about, creators like you. Incredible.
                </Typography>
                
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                
  @izaiahtilton7019 
                </Typography>
                {" 2 weeks ago"}
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
               I never comment on anything - but this is the kind of content that I keep coming back to YouTube for. This is what it’s all about, creators like you. Incredible.
                </Typography>
                
              </React.Fragment>
            }
          />
        </ListItem>
        </List>
        </Grid>



        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
         <>hello</>
        </Grid>

      
      
      
       


      
  </Grid>
  </>
  );
}