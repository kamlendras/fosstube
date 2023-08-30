"use client"
import React, { useRef, useEffect } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Grid from '@mui/material/Unstable_Grid2';
import Link2 from '@mui/material/Link';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip >
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
     
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClick}

        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 0,
              height: 0,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
        
          <Grid container columnSpacing={2}>
          <Grid xs={2}>
          {/* <Avatar
        alt="You"
        src="./avatar.svg"
        sx={{ width: 26, height: 26 }}
      /> */}
      <img src="./avatar.svg" width={56} height={56} alt="You" />
            </Grid>
          <Grid xs={10}>
            <Grid xs={12}>
              <ListItemText> KSINGH
              </ListItemText>
            </Grid>
            <Grid xs={12}>
              <ListItemText> @KSINGH
              </ListItemText>
            </Grid>
            <Grid xs={12}>
              <Link2 href="#" underline="none" fontSize="medium">
                {'Manage your Universal Account'}
              </Link2>
            </Grid>
            </Grid>
           

          </Grid>


        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <RocketOutlinedIcon />
          </ListItemIcon>
          Your Space
        </MenuItem>


     
        <MenuItem  onClick={handleClick} >
                    <ListItemIcon>
                        <SwitchAccountOutlinedIcon fontSize="small" />
                    </ListItemIcon>

                    <ListItemText> Switch account</ListItemText>
                    <ListItemIcon>
                         <ArrowForwardIosOutlinedIcon fontSize="small" />
                   </ListItemIcon>


                </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Sign out
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <  Brightness3OutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText> Appearance: Device theme
          </ListItemText>
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <TranslateOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>  Language: English   </ListItemText>
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LanguageOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Location: India</ListItemText>
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <KeyboardOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Keyboard shortcuts
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HelpOutlineOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Help
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FeedbackOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Send feedback
        </MenuItem>



      </Menu>
    </React.Fragment>
  );
}