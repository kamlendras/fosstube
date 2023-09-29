import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signIn, signOut, useSession } from "next-auth/react"
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import styles from "../styles/header.module.css"
export default function NestedList() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <>
   
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <SwitchAccountOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText> Switch account</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ pl: 3 }} component="div" disablePadding>

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
          {session?.user && (
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
             
            </>
          )}
        </p>
      

        {session?.user && (
            <>
             
              <a
                href={`/api/auth/signout`}
                // className={styles.button}
              
              >
          <ListItemButton
   onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
           >
            <ListItemIcon>
              <PersonAddAltIcon />
            </ListItemIcon>
            <ListItemText primary="add account" />
           
          </ListItemButton>
          </a>
            </>
          )}
          
        </List>
      </Collapse>
      </>
  );
        }