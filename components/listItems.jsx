import React, { useState } from "react";
import Copyright from './CopyRightR'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
   
    <HomeIcon/>
      
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PlayCircleOutlineOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Play" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
     < RocketOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Spaces" />
    </ListItemButton>
   
  
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
     <ListItemButton>
      <ListItemIcon>
        <LibraryBooksOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Library" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HistoryIcon/>
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <RocketLaunchOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Your Space" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FavoriteBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItemButton>
    <ListSubheader component="div" inset>
      Spaces
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        < AddCircleOutlineOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Browse" />
    </ListItemButton>
    <ListSubheader component="div" inset>
      Explore
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        < WhatshotOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Trending" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        < MusicNoteOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Music" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        < SportsEsportsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Gaming" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NewspaperIcon/>
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        < LightbulbOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Learning" />
    </ListItemButton>
    <ListSubheader component="div" inset>
    <Copyright sx={{ pt: 4 }} />
    </ListSubheader>
   
  </React.Fragment>
);