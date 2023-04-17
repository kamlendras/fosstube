import React, { useState } from "react";
import Copyright from './CopyRightR'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
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
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import Link from 'next/link'
export const ListItems = (
  <React.Fragment>
    <Link href="/">
    <ListItemButton>
      <ListItemIcon>
   
    <HomeIcon/>
      
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    </Link>
    <Link href="/play">
    <ListItemButton>
      <ListItemIcon>
        <PlayCircleOutlineOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Play" />
    </ListItemButton>
    </Link>
    <Link href="/spaces">
    <ListItemButton>
      <ListItemIcon>
     < RocketOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Spaces" />
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <Link href="/courses">
    <ListItemButton>
      <ListItemIcon>
        <BookOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <Link href="/library">
    <ListItemButton>
      <ListItemIcon>
        <LibraryBooksOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Library" />
    </ListItemButton>
    </Link>
    <Link href="/history">
    <ListItemButton>
      <ListItemIcon>
        <HistoryIcon/>
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemButton>
    </Link>
    <Link href="space">
    <ListItemButton>
      <ListItemIcon>
        <RocketLaunchOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Your Space" />
    </ListItemButton>
    </Link>
    <Link href="/favorites">
    <ListItemButton>
      <ListItemIcon>
        <FavoriteBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <ListSubheader  inset>
    <Typography variant="body1" gutterBottom >
        Spaces
      </Typography>
    </ListSubheader>
  
  
    {/* <ListItemText >
        Browse
      </ListItemText> */}
      <Link href="/browse">
    <ListItemButton>
      <ListItemIcon>
        < AddCircleOutlineOutlinedIcon/>
      </ListItemIcon>
      <ListItemText >
        Browse
      </ListItemText>
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <ListSubheader component="div" inset>
      Explore
    </ListSubheader>
    <Link href="/trending">
    <ListItemButton>
      <ListItemIcon>
        < WhatshotOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Trending" />
    </ListItemButton>
    </Link>
    <Link href="/music">
    <ListItemButton>
      <ListItemIcon>
        < MusicNoteOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Music" />
    </ListItemButton>
    </Link>
    <Link href="/gaming">
    <ListItemButton>
      <ListItemIcon>
        < SportsEsportsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Gaming" />
    </ListItemButton>
    </Link>
    <Link href="/news">
    <ListItemButton>
      <ListItemIcon>
        <NewspaperIcon/>
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItemButton>
    </Link>
    <Link href="/learning">
    <ListItemButton>
      <ListItemIcon>
        < LightbulbOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Learning" />
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <ListSubheader component="div" inset>
      More From Code Press
    </ListSubheader>
    <Link href="/codeeditor">
    <ListItemButton>
    <ListItemIcon>
    <img src="/ce.svg" height={26} width={26} ></img>
      </ListItemIcon>
      
  
      <ListItemText primary="Code Editor" />
    </ListItemButton>
    </Link>
    <Link href="/webcompiler">
    <ListItemButton>
      <ListItemIcon>
      <img src="/wc.svg" height={26} width={26} ></img>
      </ListItemIcon>
      <ListItemText primary="Web Compiler" />
    </ListItemButton>
    </Link>
      <Divider sx={{ my: 1 }} />
      <Link href="/account">
    <ListItemButton>
      <ListItemIcon>
        < SettingsOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    </Link>
    <Link href="/report">
    <ListItemButton>
      <ListItemIcon>
        < OutlinedFlagIcon />
      </ListItemIcon>
      <ListItemText primary="Report" />
    </ListItemButton>
    </Link>
    <Link href="/help">
    <ListItemButton>
      <ListItemIcon>
        < HelpOutlineOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItemButton>
    </Link>
    <Link href="/feedback">
    <ListItemButton>
      <ListItemIcon>
        < FeedbackOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItemButton>
    </Link>

    <ListSubheader component="div" inset>
    <Copyright sx={{ pt: 4 }} />
    </ListSubheader>
  
  </React.Fragment>
);

