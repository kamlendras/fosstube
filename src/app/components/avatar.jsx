"use client";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Appearance from "./appearance";
import Switchaccount from "./switchaccount"
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Location from "./location";
import ListItemAvatar from '@mui/material/ListItemAvatar';

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Grid from "@mui/material/Unstable_Grid2";
import Link2 from "@mui/material/Link";
import Language from "./language"
import Keyboard from "./keyboard"
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "../styles/header.module.css"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
import GitHubIcon from '@mui/icons-material/GitHub';
import Fab from '@mui/material/Fab';
export default function AccountMenu() {
  const { data: session, status } = useSession()
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
<header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {/* {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )} */}
        </p>
      </div>
     
    </header>

      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 42, height: 42 }}> 
            
            {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
             
             
            </>
          )}
            
            
            
            
            
             </Avatar>
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
         
      
            {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
             
             
            </>
          )}
      </ListItemAvatar>
            </Grid>
            <Grid xs={9}>
              <Grid xs={12}>
                <ListItemText>

             
                {session?.user && (
            <>
             
             
              
                {session.user.email ?? session.user.name}
            
              
            </>
          )}
              
             
           
          

                </ListItemText>
              </Grid>
              <Grid xs={12}>
                <ListItemText> @unknown</ListItemText>
              </Grid>
              <Grid xs={12}>
                <Link2 href="#" underline="none" fontSize="medium">
                  {"Manage your account"}
                </Link2>
              </Grid>
            </Grid>
          </Grid>
        </MenuItem>
        <Divider />
        <ListItemButton onClick={handleClose}>
          <ListItemIcon>
            <RocketOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Your Space</ListItemText>
         
        </ListItemButton>

        

        <Switchaccount/>


        {session?.user && (
            <>
             
              <a
                href={`/api/auth/signout`}
                // className={styles.button}
              
              >
              
              <ListItemButton   onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}>
          <ListItemIcon>
            <LogoutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Sign out
        </ListItemButton>




              </a>
            </>
          )}
      
        <Divider />

        <Appearance /><Language/><Location /><Keyboard/>

        
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
        <Link href="https://github.com/codnap/codnap.github.io/issues">
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
