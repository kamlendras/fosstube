"use client"
// import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import Link from 'next/link'
import { usePathname } from "next/navigation";
import Copyright from './components/copyrightr'
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
// import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
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
  const pathname = usePathname();


    const [open, setOpen] = React.useState(false);
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

            <List component="nav">
              
            <React.Fragment>
    <Link href="/" className={pathname == "/" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
   
    <HomeIcon href="/" className={pathname == "/" ? "active" : ""}/>
      
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    </Link>
    <Link href="/play"  className={pathname == "/play" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        <PlayCircleOutlineOutlinedIcon  className={pathname == "/play" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Play" />
    </ListItemButton>
    </Link>
    <Link href="/spaces" className={pathname == "/spaces" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
     < RocketOutlinedIcon  className={pathname == "/spaces" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Spaces" />
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <Link href="/courses"  className={pathname == "/courses" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        <BookOutlinedIcon className={pathname == "/courses" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <Link href="/library" className={pathname == "/library" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        <LibraryBooksOutlinedIcon className={pathname == "/library" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Library" />
    </ListItemButton>
    </Link>
    <Link href="/history" className={pathname == "/history" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        <HistoryIcon className={pathname == "/history" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemButton>
    </Link>
    <Link href="space" className={pathname == "/space" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        <RocketLaunchOutlinedIcon className={pathname == "/space" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Your Space" />
    </ListItemButton>
    </Link>
    <Link href="/favorites" className={pathname == "/favorites" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        <FavoriteBorderIcon className={pathname == "/favorites" ? "active" : ""} />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <ListSubheader  inset>
    <Typography variant="body1" gutterBottom >
        Spaces
      </Typography>
    </ListSubheader>
  
  
    {/* <ListItemText >
        Browse
      </ListItemText> */}
      <Link href="/browse" className={pathname == "/browse" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        < AddCircleOutlineOutlinedIcon className={pathname == "/browse" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText >
        Browse
      </ListItemText>
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <ListSubheader component="div" inset>
      Explore
    </ListSubheader>
    <Link href="/trending" className={pathname == "/trending" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        < WhatshotOutlinedIcon className={pathname == "/trending" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Trending" />
    </ListItemButton>
    </Link>
    <Link href="/music" className={pathname == "/music" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        < MusicNoteOutlinedIcon className={pathname == "/music" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Music" />
    </ListItemButton>
    </Link>
    <Link href="/gaming" className={pathname == "/gaming" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        < SportsEsportsOutlinedIcon className={pathname == "/gaming" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Gaming" />
    </ListItemButton>
    </Link>
    <Link href="/news" className={pathname == "/news" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        <NewspaperIcon className={pathname == "/news" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItemButton>
    </Link>
    <Link href="/learning" className={pathname == "/learning" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        < LightbulbOutlinedIcon className={pathname == "/learning" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Learning" />
    </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <ListSubheader component="div" inset>
      More From Code Press
    </ListSubheader>
    <Link href="/codeeditor">
    <ListItemButton>
    <ListItemIcon>
    <img src="/ce.svg" height={26} width={26} ></img>
      </ListItemIcon>
      
  
      <ListItemText primary="Code Editor" />
    </ListItemButton>
    </Link>
    <Link href="/webcompiler">
    <ListItemButton>
      <ListItemIcon>
      <img src="/wc.svg" height={26} width={26} ></img>
      </ListItemIcon>
      <ListItemText primary="Web Compiler" />
    </ListItemButton>
    </Link>
      <Divider sx={{ my: 1 }} />
      <Link href="/account" className={pathname == "/settings" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        < SettingsOutlinedIcon className={pathname == "/settings" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    </Link>
    <Link href="/report" className={pathname == "/report" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        < OutlinedFlagIcon className={pathname == "/report" ? "active" : ""} />
      </ListItemIcon>
      <ListItemText primary="Report" />
    </ListItemButton>
    </Link>
    <Link href="/help" className={pathname == "/help" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        < HelpOutlineOutlinedIcon className={pathname == "/help" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItemButton>
    </Link>
    <Link href="/feedback" className={pathname == "/feedback" ? "active" : ""}>
    <ListItemButton>
      <ListItemIcon>
        < FeedbackOutlinedIcon className={pathname == "/feedback" ? "active" : ""}/>
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItemButton>
    </Link>

    <ListSubheader component="div" inset>
    <Copyright sx={{ pt: 4 }} />
    </ListSubheader>
  
  </React.Fragment>
 
              
              
              {/* {ListItems} */}
              
              
              </List>
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
          <Container maxWidth="xl" sx={{ mt: 0.4, }}>
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