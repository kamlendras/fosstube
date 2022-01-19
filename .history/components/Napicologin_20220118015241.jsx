import Link from "next/link";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Napicologin() {
    function handleClick(message) {
        return () => {
          setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
        };
      }
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    
      const handleExited = () => {
        setMessageInfo(undefined);
      };

      const [snackPack, setSnackPack] = React.useState([]);
      const [open, setOpen] = React.useState(false);
      const [messageInfo, setMessageInfo] = React.useState(undefined);
    
      React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
          // Set a new snack when we don't have an active one
          setMessageInfo({ ...snackPack[0] });
          setSnackPack((prev) => prev.slice(1));
          setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
          // Close an active snack when a new one is added
          setOpen(false);
        }
      }, [snackPack, messageInfo, open]);
    return (
        <>
        
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
          
            <span onClick={handleClick("Add to Bookmark")}>
              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
              </span>
         
            <Snackbar
              key={messageInfo ? messageInfo.key : undefined}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              TransitionProps={{ onExited: handleExited }}
              message={messageInfo ? messageInfo.message : undefined}
              action={
                <React.Fragment>
                  <Button color="primary" size="small" onClick={handleClose}>
                    UNDO
                  </Button>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    sx={{ p: 0.5 }}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </React.Fragment>
              }
            /></>
    )
}

export default Napicologin
