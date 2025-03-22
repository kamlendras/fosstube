"use client";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Appearance from "./appearance";
import Switchaccount from "./switchaccount"
import Link from "next/link";
import React, { } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import Location from "./location";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import Grid from '@mui/material/Grid';
import Link2 from "@mui/material/Link";
import Language from "./language"
import Keyboard from "./keyboard"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import styles from "../styles/header.module.css"
import GoogleIcon from '@mui/icons-material/Google';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
export default function AccountMenu() {
  const loading = status === "loading"

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [opent, setOpent] = React.useState(true);

  const handleClickt = () => {
    setOpent(!opent);
  };

  return (
    <React.Fragment>


      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ bgcolor: deepOrange[500] }}>R







            </Avatar>
          </IconButton>
   
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
            // overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 0,
              height: 0,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Grid container columnSpacing={2}>
            <Grid xs={3}>
              <ListItemAvatar>


        


           
              </ListItemAvatar>
            </Grid>
            <Grid xs={9}>
              <Grid xs={12}>
                <ListItemText>







                </ListItemText>
              </Grid>
              <Grid xs={12}>
                <ListItemText> @raymundo</ListItemText>
              </Grid>
              <Grid xs={12}>
                <Link2 href="#" underline="none" fontSize="medium">
                  {"View your channel"}
                </Link2>
              </Grid>
            </Grid>
          </Grid>
        </MenuItem>
        <Divider />
        <ListItemButton onClick={handleClose}>
          <ListItemIcon>
            <GoogleIcon />
          </ListItemIcon>
          <ListItemText>Google Account</ListItemText>

        </ListItemButton>



        <Switchaccount />
        <ListItemButton onClick={handleClose}>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Sign out</ListItemText>

        </ListItemButton>

     
      

              <ListItemButton >
                <ListItemIcon>
                  <LogoutOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Sign out
              </ListItemButton>




       


        <Divider />



        <Appearance /><Language /><Location /><Keyboard />


        <Divider />
        <ListItemButton onClick={handleClose}>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </ListItemButton>
        <Divider />
        <Link href="/help">
          <ListItemButton onClick={handleClose}>
            <ListItemIcon>
              <HelpOutlineOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Help
          </ListItemButton>
        </Link>
        <Link href="/">
          <ListItemButton onClick={handleClose}>
            <ListItemIcon>
              <FeedbackOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Send feedback
          </ListItemButton>
        </Link>
      </Menu>
    </React.Fragment>
  );
}
