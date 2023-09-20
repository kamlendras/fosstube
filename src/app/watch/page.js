"use client"
import { useState } from "react";
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
export default function App() {
  const [showMore, setShowMore] = useState(false);
  const {text} = "knsdknknksjnkvd"
  return (
    <>
    <Toolbar/>
    <Grid container spacing={0}>
        <Grid item xs={8}>
        <MediaPlayer
    title="Sprite Fight"
    src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
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
        </Grid>
        <Grid item xs={4}>
         <>hello</>
        </Grid>

        </Grid>
      
        Baalam Gunda (Official Video) | Fiza Choudhary, Tushar Goel | New Haryanvi Songs Haryanavi 2023
      
       


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
  
    
   
    <Fab variant="extended" size="small" color="white">
        
        subscribe
      </Fab>
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
      <div>
      <EmojiPicker />
    </div>
  </>
  );
}
