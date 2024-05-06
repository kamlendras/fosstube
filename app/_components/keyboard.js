import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
function createData(name, a, b, c, d) {
  return { name, a, b, c, d };
}


const rows = [
  createData('Toggle play/pause', 'k', 'Toggle full screen','f', ),
  createData('Rewind 10 seconds', 'j', 'Toggle theater mode', 't', ),
  createData('Fast forward 10 seconds', 'l', 'Toggle miniplayer', 'i', ),
  createData('Previous video', 'P (SHIFT+p)', 'Close miniplayer or current dialog','ESCAPE', ),
  createData('Next video', 'N (SHIFT+n)', 'Toggle mute', 'm', ),
];
export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <>
   
      <ListItemButton  onClick={handleClickOpen('paper')}>
        <ListItemIcon>
        <KeyboardOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText> Keyboard shortcuts</ListItemText>
      
      </ListItemButton>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Keyboard shortcuts</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
 <Table 
  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PLAYBACK</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">GENERAL</TableCell>
            <TableCell align="right"></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.a}</TableCell>
              <TableCell align="right">{row.b}</TableCell>
              <TableCell align="right">{row.c}</TableCell>
              <TableCell align="right">{row.d}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Dismiss</Button>
        </DialogActions>
      </Dialog>
      </>
  );
        }