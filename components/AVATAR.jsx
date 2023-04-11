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
import CodeIcon from '@mui/icons-material/Code';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
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
              width: 10,
              height: 10,
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
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> Your Space
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CodeIcon fontSize="small" />
          </ListItemIcon>
          Code
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SwitchAccountIcon fontSize="small" />
          </ListItemIcon>
          Switch account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign out
        </MenuItem>
        <Divider />
      
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <  Brightness3OutlinedIcon fontSize="small" />
          </ListItemIcon>
          Appearance: Device theme
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <TranslateOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Language: English
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LanguageOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Location: India
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
            <Settings fontSize="small" />
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