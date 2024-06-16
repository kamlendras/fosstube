import * as React from 'react';
import Fab from '@mui/material/Fab';
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Button from '@mui/material/Button';
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
      
      {/* <IconButton aria-label="settings"  >
            <MoreVertIcon />
            </IconButton> */}

<Fab variant="extended" size="small" sx={{ ml: 0.4 , textTransform: 'none'}} onClick={handleClickOpen}>
              <FileDownloadOutlinedIcon sx={{ mr: 1 }} />
              Download
            </Fab>
            <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Download Quality"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="b"
        name="radio-buttons-group"
      >
        <FormControlLabel value="a" control={<Radio />} label="Low (144p)" />
        <FormControlLabel value="b" control={<Radio />} label="Standard (480p)" />
        <FormControlLabel value="c" control={<Radio />} label="High (720p)" />
        <FormControlLabel value="d" control={<Radio />} label="Full HD (1080p)" />
      </RadioGroup>
    </FormControl>
    <Divider sx={{ my: 1 }} />

            <FormControlLabel control={<Checkbox />} label="Remember my settings for 30 days" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{  textTransform: 'none'}}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus sx={{ textTransform: 'none'}}>
            Download
          </Button>
        </DialogActions>
      </Dialog>
      
    </React.Fragment>
  );
}