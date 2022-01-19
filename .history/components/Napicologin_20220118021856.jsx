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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Napicologin() {
    const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <>
        
        <span onClick={handleClickOpen}>
        <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<FavoriteBorder />}
              />
              
            </span>
            <span onClick={handleClickOpen}>
            <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkBorderIcon />}
              />
              </span>
           <div>
    
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"You are not Logined Yet!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           Login to save your Favorites and Bookmarks and sys data.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          
          <Button onClick={handleClose} autoFocus>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
         
      
            </>
    )
}

export default Napicologin
