import './Navbar.css';
import S from "./S";
import Search from "./Search";
import * as React from 'react';
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import { TwitterMentionButton, } from 'react-twitter-embed';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import BookIcon from '@mui/icons-material/Book';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import FeedbackIcon from '@mui/icons-material/Feedback';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ExploreIcon from '@mui/icons-material/Explore';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));








export default function Navbar() {
return (
  <nav className="header" >
    <a href="/">
      <img className="header_logo" src="img/logoxl.jpeg" alt="Arrow Nap" />
    </a>

    <Search />

    <span className="ox">
      <Mic>          <MicRoundedIcon style={{ fontSize: "2.5rem", color: "white" }} />   </Mic>
      <Bell>           <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <span className="bell" variant="contained" {...bindTrigger(popupState)}>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon style={{ fontSize: "2.5rem", color: "white" }} />
              </Badge>
            </span>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography sx={{ p: 2 }}><TwitterMentionButton
                screenName={'naparrow'} /><>You can <a style={{ color: "rgb(7, 106, 225)" }} href="https://twitter.com/naparrow" target="_blank"><u>follow us on Twitter</u> </a><br /> to receive exclusive tips<br /> and updates.</></Typography>
            </Popover>
          </div>
        )}
      </PopupState>
      </Bell>

    </span>




  </nav >

)
            }




const Mic = styled`

    margin-right: 0.5rem;
    margin-left: 1rem;


    `;

const Bell = styled`

    margin-right: 0.5rem;
    margin-left: 1rem;


    `;



