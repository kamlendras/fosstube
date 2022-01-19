import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Navbar.css';
import Dr from "./Dr";
import { styled } from '@mui/material/styles';
import S from "./S";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import Badge from '@mui/material/Badge';
import { TwitterMentionButton, } from 'react-twitter-embed';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Login = (props) => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <Dr/>
      
    </Box>
  );



  return (


    <div className="fnavbar">

      <div ><a href="/" className="logo"        >
        <img src="img/logoxl.jpeg" height='50' alt="Arrow Nap" />
      </a></div>

      {/* <div class="sbar"><S /></div> */}
      <div class="mic"><MicRoundedIcon className="icon" /></div>
      <div class="bell"><PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <span className="bell" variant="contained" {...bindTrigger(popupState)}>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon className="icon" />
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
      </PopupState></div>

      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <span style={{ fontSize: "0" }} onClick={toggleDrawer(anchor, true)}>{anchor}

              <div className="set"    > <SettingsIcon className="icon"  ></SettingsIcon> </div>


            </span>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>

    </div>








  );
};











export default Login;