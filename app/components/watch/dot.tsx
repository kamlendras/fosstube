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
import Fab from '@mui/material/Fab';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
export default function Dot() {
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
      
      {/* <IconButton aria-label="settings"  >
            <MoreVertIcon />
            </IconButton> */}

            <Fab  size="small" onClick={handleClick}  sx={{ ml: 0.4 }} >
          <MoreHorizOutlinedIcon  />
        
        </Fab>
      
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
            <VolunteerActivismOutlinedIcon fontSize="small" />
          </ListItemIcon>
         Donate
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Clip
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PlaylistAddOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Save
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <OutlinedFlagIcon fontSize="small" />
          </ListItemIcon>
          Report
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SubtitlesOutlinedIcon fontSize="small" />
          </ListItemIcon>
         Show Transcript
        </MenuItem>

        
       
      </Menu>
    </React.Fragment>
  );
}