"use client";
import * as React from "react";
import { useTheme, styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItems } from "./listitems";
import Notifications from "./notifications";
import Create from "./create";
import Avatar from "./avatar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import SplitPane, { Pane } from 'react-split-pane';
import GitHubIcon from '@mui/icons-material/GitHub';
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
// import { windowDimensions } from './useWindowDimension';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();
// const { width, height } = windowDimensions();
function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


//  new
const [mode, setMode] = React.useState('light');
const colorMode = React.useMemo(
  () => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }),
  [],
);

const theme = React.useMemo(
  () =>
    createTheme({
      palette: {
        mode,
      },
    }),
  [mode],
);

  return (
    // <ThemeProvider theme={mdTheme}>
        // <ThemeProvider theme={darkTheme}>
        <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar
        position="fixed"
        colour="primary"
        // open={open}
      >
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <span className="menuicon">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              // ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          </span>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <img src="/codnapwhite.svg" alt="" height={50} width={50} />
          </Typography>

          <Paper elevation={3} className="sp">
            <Grid container spacing={2}>
              <Grid xs={11}>
                <input
                  type="text"
                  placeholder="Search codnap"
                  className="searchcodepress"
                />
              </Grid>
              <Grid xs={1}>
                <centre>
                  <SearchIcon style={{ color: "gray" }} className="vc" />
                </centre>
              </Grid>
            </Grid>
          </Paper>
          {theme.palette.mode} 
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
          <Create />
          <Notifications />
          <Avatar />
        </Toolbar>
      </AppBar>

      <span className="LeftPage">
        <Drawer variant="permanent" open={open}>
      <SimpleBar style={{ maxHeight: "100vh" }}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              px: [1],
            }}
          >  <span className="menuicon">
            <IconButton onClick={toggleDrawer}>
         <MenuIcon />  
            </IconButton>
            </span> 
          </Toolbar>
         
          
      
            <List component="nav"  >
              {ListItems}
            </List>
          </SimpleBar>
           </Drawer>
      </span>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
