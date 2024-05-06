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
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import {
  useTheme,
  styled,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export default function NestedList() {

  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

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
          <Brightness3OutlinedIcon />
        </ListItemIcon>
        <ListItemText>Appearance: Device theme</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
      selected={selectedIndex === 0}
      onClick={(event) => handleListItemClick(event, 0)}
           >
            <ListItemIcon>
              <DoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Use device theme" />
           
          </ListItemButton>
        
                       <ListItemButton sx={{ pl: 9 }}   selected={selectedIndex === 1}
                       onClick={(event) => handleListItemClick(event, 1)}>
                         <ListItemText primary="Dark theme" />
                       </ListItemButton>


                        <ListItemButton sx={{ pl: 9 }}  selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}>
                          <ListItemText primary="Light theme" />
                       </ListItemButton>




                    




         
      
        </List>
      </Collapse>
      </>
  );
        }