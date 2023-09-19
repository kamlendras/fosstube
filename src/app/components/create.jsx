"use client"
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function CREATE() {
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
      
        <Tooltip title="Create">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
              {isActive? <AddCircleIcon  style={{ color: "white" }} onClick={()=>{
          setIsActive(!isActive)}}/>:
      <AddCircleOutlineOutlinedIcon  style={{ color: "white" }} onClick={()=>{
          setIsActive(!isActive)}} />
           }
          
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        onClose={setIsActive}
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
          <ListItemIcon>
            < FileUploadOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Upload
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
          <svg xmlns="http://www.w3.org/2000/svg"   width="30" height="30" x="0" y="0" viewBox="0 0 32 32"   ><g><path d="M11.57 23a1 1 0 0 1-.68-.27 9.28 9.28 0 0 1 0-13.46 1 1 0 0 1 1.36 1.46 7.3 7.3 0 0 0 0 10.54 1 1 0 0 1-.68 1.73zm-4 2.68a1 1 0 0 0 0-1.41 11.43 11.43 0 0 1 0-16.54 1 1 0 1 0-1.41-1.46 13.44 13.44 0 0 0 0 19.46 1 1 0 0 0 1.42-.05zm13.53-2.95a9.28 9.28 0 0 0 0-13.46 1 1 0 1 0-1.37 1.46 7.27 7.27 0 0 1 0 10.54 1 1 0 0 0-.05 1.41 1 1 0 0 0 .74.32 1 1 0 0 0 .68-.27zm4.72 3a13.41 13.41 0 0 0 0-19.46 1 1 0 0 0-1.36 1.46 11.43 11.43 0 0 1 0 16.54 1 1 0 0 0-.05 1.41 1 1 0 0 0 .73.32 1 1 0 0 0 .68-.27zM18 16a2 2 0 1 0-2 2 2 2 0 0 0 2-2z" data-name="Layer 11" fill="currentcolor" data-original="#000000" class=""></path></g></svg>
          </ListItemIcon>
          Go Live
        </MenuItem>
      
      </Menu>
    </React.Fragment>
  );
}