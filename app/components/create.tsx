"use client"
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
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



        <Stack direction="row" spacing={1}>
          <Chip onClick={handleClick} icon={<AddOutlinedIcon />} label="Create" />
        </Stack>

      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        // onClose={setIsActive}
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
            < LiveTvOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Go Live
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            < EditNoteOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Create Post
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}