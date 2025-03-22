import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import CodeIcon from '@mui/icons-material/Code';
// import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
// import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
// import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
// import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
// import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
// import ListItemText from '@mui/material/ListItemText';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import Grid from '@mui/material/Grid';
// import Link2 from '@mui/material/Link';
// import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// export default function AccountMenu() {
//     const [anchorE2, setAnchorE2] = React.useState(null);
//     const open = Boolean(anchorE2);
//     const handleClick2 = (event) => {
//         setAnchorE2(event.currentTarget);
//     };
//     const handleClose2 = () => {
//         setAnchorE2(null);
//     };
//     return (
//         <>
     

//                 <Tooltip >
//                     <MenuItem onClick={handleClick2}>
//                         <ListItemIcon>
//                             <SwitchAccountOutlinedIcon fontSize="small" />
//                         </ListItemIcon>

//                         <ListItemText> Switch account</ListItemText>
//                         <ListItemIcon>
//                             <ArrowForwardIosOutlinedIcon fontSize="small" />
//                         </ListItemIcon>

//                     </MenuItem>
//                 </Tooltip>
          
//             <Menu
//                 anchorE2={anchorE2}
//                 id="account-menu"
//                 open={open}
//                 onClose={handleClose2}
//                 onClick={handleClose2}
//                 PaperProps={{
//                     elevation: 0,
//                     sx: {
//                         overflow: 'visible',
//                         filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                         mt: 1.5,
//                         '& .MuiAvatar-root': {
//                             width: 32,
//                             height: 32,
//                             ml: -0.5,
//                             mr: 1,
//                         },
//                         '&:before': {
//                             content: '""',
//                             display: 'block',
//                             position: 'absolute',
//                             top: 0,
//                             right: 14,
//                             width: 0,
//                             height: 0,
//                             bgcolor: 'background.paper',
//                             transform: 'translateY(-50%) rotate(45deg)',
//                             zIndex: 0,
//                         },
//                     },
//                 }}
//                 transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                 anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//             >


//                 <MenuItem>
//                     <Grid container spacing={0}>
//                         <Grid xs={12}>
//                             <ListItemText> KSINGH
//                             </ListItemText>
//                         </Grid>
//                         <Grid xs={12}>
//                             <ListItemText> @KSINGHgg
//                             </ListItemText>
//                         </Grid>
//                         <Grid xs={12}>
//                             <Link2 href="#" underline="none" fontSize="small">
//                                 {'Manage your Universe Account'}
//                             </Link2>
//                         </Grid>

//                     </Grid>


//                 </MenuItem>
//                 <Divider />
//                 <MenuItem onClick={handleClose2}>
//                     <ListItemIcon>
//                         <RocketOutlinedIcon />
//                     </ListItemIcon>
//                     Your Space
//                 </MenuItem>

//            
//                 <MenuItem onClick={handleClose2}>
//                     <ListItemIcon>
//                         <LogoutOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                     Sign out
//                 </MenuItem>
//                 <Divider />

//                 <MenuItem onClick={handleClose2}>
//                     <ListItemIcon>
//                         <  Brightness3OutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText> Appearance: Device theme
//                     </ListItemText>
//                     <ListItemIcon>
//                         <ArrowForwardIosOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose2}>
//                     <ListItemIcon>
//                         <TranslateOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText>  Language: English   </ListItemText>
//                     <ListItemIcon>
//                         <ArrowForwardIosOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose2}>
//                     <ListItemIcon>
//                         <LanguageOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText>Location: India</ListItemText>
//                     <ListItemIcon>
//                         <ArrowForwardIosOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose2}>
//                     <ListItemIcon>
//                         <KeyboardOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                     Keyboard shortcuts
//                 </MenuItem>
//                 <Divider />
//                 <MenuItem onClick={handleClose2}>
//                     <ListItemIcon>
//                         <SettingsOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                     Settings
//                 </MenuItem>
//                 <Divider />
//                 <MenuItem onClick={handleClose2}>
//                     <ListItemIcon>
//                         <HelpOutlineOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                     Help
//                 </MenuItem>
//                 <MenuItem onClick={handleClose2}>
//                     <ListItemIcon>
//                         <FeedbackOutlinedIcon fontSize="small" />
//                     </ListItemIcon>
//                     Send feedback
//                 </MenuItem>



//             </Menu>
//         </>
//     );
// }