"use client"
import React, { useState } from "react";
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
export default function AccountMenu() {
  const [isActive, setIsActive] = useState(false);
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
      
        <Tooltip title="Notifications">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
   
            {isActive? < NotificationsIcon style={{ color: "white" }} onClick={()=>{
          setIsActive(!isActive)}}/>:
      <NotificationsNoneIcon  style={{ color: "white" }} onClick={()=>{
          setIsActive(!isActive)}} />
           }
          
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        // onClose={setIsActive}
        onClose={handleClose}
        onClick={handleClose}
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
        <Grid container spacing={0}>
        <Grid xs={10}>
        <ListItemText style={{ margin: "0.5rem" }} >Notifications</ListItemText>
        </Grid>
        <Grid xs={2}>
        <Tooltip title="Settings">
        
              <IconButton aria-label="settings"   >
            <SettingsOutlinedIcon fontSize="small" />
            </IconButton>
       
        </Tooltip>
        </Grid>
      </Grid>
        
        
          
            
    
        <Divider />
        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  // style={{ minHeight: '100vh' }}
>
<NotificationsNoneIcon sx={{ fontSize: "10rem" }} style={{ color: "gray" }} />
  {/* <Grid item xs={3}>
   <LoginForm />
  </Grid>    */}
     <Typography variant="subtitle1" gutterBottom>
        Your notifications live here
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
      Follow your favorite Space to get notified.
      </Typography>
</Grid> 
          
            
          
      
      </Menu>
    </React.Fragment>
  );
    }