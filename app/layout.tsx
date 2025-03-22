"use client";
import * as React from "react";
import {styled,createTheme,ThemeProvider,} from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import HistoryIcon from "@mui/icons-material/History";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Copyright from "./components/copyright";
import localFont from "next/font/local";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Notifications from "./components/notifications";
import Create from "./components/create";
import Avatar from "./components/avatar";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Box from "@mui/material/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./globals.css";
import { Roboto } from "next/font/google";
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);



const myFont = localFont({ src: "./_gothic.otf" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
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

  // const isBreakpoint = useMediaQuery(768);
  return (
      <>
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <Box 
          sx={{ display: "flex" }}
          
          >
            <CssBaseline />

         
               
       
                <AppBar position="absolute" color="primary">
                  <Toolbar
                    variant="dense"
                    // sx={{
                    //   pr: "24px",
                    // }}
                  >
                    <span className="menuicon">
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                          marginRight: "10px",
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
                      noWrap
                      sx={{ flexGrow: 1 }}
                    >
                      <img src="/youtubefull.svg" 
                      />
                    </Typography>

                    <div className="wrap">
                      <div className="search">
                        <input
                          type="text"
                          className="searchTerm"
                          placeholder="Search YouTube"
                        />
                        <button type="submit" className="searchButton">
                          <SearchOutlinedIcon />
                        </button>
                      </div>
                    </div>

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
              





       
<Avatar/>


     

                    



                  </Toolbar>
                </AppBar>
        

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
                    <span className="menuicon">
                      <IconButton onClick={toggleDrawer}>
                        <MenuIcon />
                      </IconButton>
                    </span>
                  </Toolbar>

                  <List component="nav">
                    <List component="nav">
                      <List component="nav">
                        <React.Fragment>
                          <Link
                            href="/"
                            className={pathname == "/" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <HomeIcon
                                  href="/"
                                  className={pathname == "/" ? "active" : ""}
                                />
                              </ListItemIcon>
                              <ListItemText primary="Home" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/shorts"
                            className={pathname == "/shorts" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <PlayCircleOutlineOutlinedIcon
                                  className={
                                    pathname == "/shorts" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Shorts" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/subscriptions"
                            className={pathname == "/subscriptions" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <SubscriptionsOutlinedIcon
                                  className={
                                    pathname == "/subscriptions" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Subscriptions" />
                            </ListItemButton>
                          </Link>
                          <Divider sx={{ my: 1 }} />
                          <Link
                            href="/history"
                            className={pathname == "/history" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <HistoryIcon
                                  className={
                                    pathname == "/history" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="History" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/playlists"
                            className={pathname == "/playlists" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                < PlaylistPlayOutlinedIcon
                                  className={
                                    pathname == "/playlists" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Playlists" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="your_videos"
                            className={pathname == "/your_videos" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <SmartDisplayOutlinedIcon
                                  className={
                                    pathname == "/your_videos" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Your videos" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/watch_later"
                            className={pathname == "/watch_later" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <AccessTimeOutlinedIcon
                                  className={
                                    pathname == "/watch_later" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Watch later" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/liked_videos"
                            className={pathname == "/liked_videos" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <ThumbUpOutlinedIcon
                                  className={
                                    pathname == "/liked_videos" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Liked videos" />
                            </ListItemButton>
                          </Link>
                          {/* <Link
                            href="/courses"
                            className={pathname == "/courses" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <BookOutlinedIcon
                                  className={
                                    pathname == "/courses" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Courses" />
                            </ListItemButton>
                          </Link> */}
                          <Divider sx={{ my: 1 }} />
                        
                     
                          
                          
                          <ListSubheader component="div" inset>
                            Explore
                          </ListSubheader>
                          <Link
                            href="/trending"
                            className={pathname == "/trending" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <WhatshotOutlinedIcon
                                  className={
                                    pathname == "/trending" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Trending" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/shopping"
                            className={pathname == "/shopping" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <LocalMallOutlinedIcon
                                  className={
                                    pathname == "/shopping" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Shopping" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/music"
                            className={pathname == "/music" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <MusicNoteOutlinedIcon
                                  className={
                                    pathname == "/music" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Music" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/movies"
                            className={pathname == "/movies" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <MovieCreationOutlinedIcon
                                  className={
                                    pathname == "/movies" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Movies" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/live"
                            className={pathname == "/live" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <LiveTvOutlinedIcon 
                                  className={
                                    pathname == "/live" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Live" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/gaming"
                            className={pathname == "/gaming" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <SportsEsportsOutlinedIcon
                                  className={
                                    pathname == "/gaming" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Gaming" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/news"
                            className={pathname == "/news" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <NewspaperIcon
                                  className={
                                    pathname == "/news" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="News" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/sports"
                            className={pathname == "/sports" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <EmojiEventsOutlinedIcon
                                  className={
                                    pathname == "/sports" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Sports" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/courses"
                            className={pathname == "/courses" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <SchoolOutlinedIcon
                                  className={
                                    pathname == "/courses" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Courses" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/fashion"
                            className={pathname == "/fashion" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <DiamondOutlinedIcon
                                  className={
                                    pathname == "/fashion" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Fashion &amp; Beauty" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/podcasts"
                            className={pathname == "/podcasts" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <PodcastsOutlinedIcon
                                  className={
                                    pathname == "/podcasts" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Podcasts" />
                            </ListItemButton>
                          </Link>
                        
                          <Divider sx={{ my: 1 }} />
                          <ListSubheader component="div" inset>
                          More from YouTube
                          </ListSubheader>
                          <Link href="/youtube_premium">
                            <ListItemButton>
                              <ListItemIcon>
                                <img
                                  src="/youtube.svg"
                                  height={26}
                                  width={26}
                                  alt="ueats"
                                />
                              </ListItemIcon>

                              <ListItemText primary="Youtube Premium" />
                            </ListItemButton>
                          </Link>
                          <Link href="/youtube_studio">
                            <ListItemButton>
                              <ListItemIcon>
                                <img
                                  src="/youtubestudio.svg"
                                  height={26}
                                  width={26}
                                  alt="ueats"
                                />
                              </ListItemIcon>

                              <ListItemText primary="Youtube Studio" />
                            </ListItemButton>
                          </Link>
                          <Link href="/youtube_music">
                            <ListItemButton>
                              <ListItemIcon>
                                <img
                        src="/youtubemusic.svg"
                                  height={26}
                                  width={26}
                                  alt="ueats"
                                />
                              </ListItemIcon>

                              <ListItemText primary="Youtube Music" />
                            </ListItemButton>
                          </Link>
                          <Link href="/youtube_kids">
                            <ListItemButton>
                              <ListItemIcon>
                                <img
                                    src="/youtubekids.svg"
                                  height={26}
                                  width={26}
                                  alt="ueats"
                                />
                              </ListItemIcon>

                              <ListItemText primary="Youtube Kids" />
                            </ListItemButton>
                          </Link>

                          <Divider sx={{ my: 1 }} />
                          <Link
                            href="/account"
                            className={pathname == "/account" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <SettingsOutlinedIcon
                                  className={
                                    pathname == "/account" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Settings" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/report_history"
                           
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <OutlinedFlagIcon
                               
                                />
                              </ListItemIcon>
                              <ListItemText primary="Report history" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/help"
                            className={pathname == "/help" ? "active" : ""}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <HelpOutlineOutlinedIcon
                                  className={
                                    pathname == "/help" ? "active" : ""
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary="Help" />
                            </ListItemButton>
                          </Link>
                          <Link
                            href="/send_feedback"
                           
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <FeedbackOutlinedIcon
                              
                                />
                              </ListItemIcon>
                              <ListItemText primary="Send feedback" />
                            </ListItemButton>
                          </Link>

                          <ListSubheader component="div" inset>
                            <Copyright sx={{ pt: 4 }} />
                          </ListSubheader>
                        </React.Fragment>
                      </List>
                    </List>
                  </List>
                </SimpleBar>
              </Drawer>
            </span>

            <Box
              component="main"
              sx={{
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Container 
              maxWidth="xl"
// maxWidth="100vw"


              //  sx={{ mt: 0.90 }}
              
              >
                {children}
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
      </body>

    </html>
        </>
  );
}