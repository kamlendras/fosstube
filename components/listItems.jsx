import React, { useState } from "react";
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
        <PeopleAltOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="People" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LibraryBooksOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Library" />
    </ListItemButton>
  
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <HistoryIcon/>
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BookmarkIcon />
      </ListItemIcon>
      <ListItemText primary="Bookmarks" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FavoriteBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItemButton>
  </React.Fragment>
);