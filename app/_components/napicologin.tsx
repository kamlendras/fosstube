import Checkbox from '@mui/material/Checkbox';
import { signIn, signOut, useSession } from "next-auth/react";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
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
           Login to save your Favorites, Bookmarks and enjoy personalisation.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <a
             href={`/api/auth/signin`}
            //  className={styles.buttonPrimary}
             onClick={(e) => {
               e.preventDefault()
               signIn()
             }}
           >
          <Button onClick={handleClose} autoFocus>
            Login
          </Button></a>
        </DialogActions>
      </Dialog>
    </div>
         
      
            </>
    )
}

export default Napicologin
