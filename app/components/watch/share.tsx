import * as React from 'react';
import Fab from '@mui/material/Fab';
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Divider from "@mui/material/Divider";
import FormLabel from '@mui/material/FormLabel';
// import {ShareSocial} from 'react-share-social' 
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
export default function Download() {
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
    <React.Fragment>
      
      <Fab variant="extended" size="small" sx={{ ml: 0.4 , textTransform: 'none'}} onClick={handleClickOpen}>
              <ShareOutlinedIcon sx={{ mr: 1 }} />
              Share
            </Fab>
            <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Share"}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText> */}
          {/* <ShareSocial 
     url ="YouTube.web.app"
     socialTypes={[
        'facebook',
        'whatsapp',
        'twitter',
        'linkedin',
        'telegram',
        'reddit',
        'line',
        'instapaper',
        'hatena',
        'email',
        'ok',
        'mailru']}
   /> */}
   <h1>social</h1>
          {/* </DialogContentText> */}
        </DialogContent>
      
      </Dialog>
      
    </React.Fragment>
  );
}