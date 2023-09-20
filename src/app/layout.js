"use client"
import * as React from "react";
import {
  useTheme,
  styled,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CssBaseline from "@mui/material/CssBaseline";
import CodeIcon from '@mui/icons-material/Code';
import MuiDrawer from "@mui/material/Drawer";
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
import { ListItems } from "./components/listitems";
import Notifications from "./components/notifications";
import Create from "./components/create";
import Avatar from "./components/avatar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import SplitPane, { Pane } from "react-split-pane";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from '@mui/material/Box';
import Appicon from "./components/appicon"
import './globals.css'
import { Inter, Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'] , weight: ['400']})
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
// export const metadata = {
//   title: 'codnap',
//   description: 'Open & Decentralized',
// }                 
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

export default function RootLayout({ children }) {
  
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
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
 return (
    <html lang="en">
      <body  className={roboto.className}>
      <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>

      <CssBaseline />

      <AppBar
        position="absolute"
        colour="primary"
        // open={open}
      >
        <Toolbar variant="dense"
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
            variant="h4"
            color="inherit"
            // noWrap
            sx={{ flexGrow: 1 }}
          >
            {/* <img src="/icon.svg" alt="" height={40} width={40} /> */}
         <Appicon/>
          </Typography>

          <Paper elevation={3} className="sp">
            <Grid container spacing={2}>
              <Grid xs={11}>
                <input
                  type="text"
                  placeholder="Search the entire universe"
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
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <Create />
          <Notifications />
          <Avatar />
        </Toolbar>
      </AppBar>

      {/* <span className="LeftPage"> */}
      <span>
        <Drawer variant="permanent" open={open}>
          <SimpleBar style={{ maxHeight: "100vh" }}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                px: [1],
              }}
            >
              {" "}
              <span className="menuicon">
                <IconButton onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </span>
            </Toolbar>

            <List component="nav">{ListItems}</List>
          </SimpleBar>
        </Drawer>
      </span>
        {/* <div className='allbody'> */}
        <Box
          component="main"
          sx={{
         
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="xl" >
        {children}
        </Container>
        </Box>
        </Box>
        {/* </div> */}
    </ThemeProvider>
    
        </body>
    </html>
  )
}
