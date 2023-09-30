import * as React from 'react';
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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
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
      
      <IconButton aria-label="settings"  onClick={handleClick}>
            <MoreVertIcon />
            </IconButton>
      
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
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
      
       
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <QueueOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Add to queue
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HistoryIcon fontSize="small" />
          </ListItemIcon>
          Save to Watch later
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PlaylistAddOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Save to playlist
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FileDownloadOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Download
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ShareOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Share
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BlockOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Not interested
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <RemoveCircleOutlineOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Don&apos;t recommend space
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <OutlinedFlagIcon fontSize="small" />
          </ListItemIcon>
          Report
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}