import {
  styled,
  useTheme,
  alpha,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { signIn, signOut, useSession } from "next-auth/react";
import * as React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "../styles/Home.module.css";
import Dr from "./Dr";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Paper from "@mui/material/Paper";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import styless from "/styles/Ask.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Link from "next/link";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles({
  root: {
    background: (props) =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",

    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: 8,
  },
});

function MyButton(props) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
}

MyButton.propTypes = {
  color: PropTypes.oneOf(["blue", "red"]).isRequired,
};

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function MenuAppBar(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Dr />
    </Box>
  );

  // const [auth, setAuth] = React.useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function MyApp() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll {...props}>
        <AppBar position={props.p}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={styles.nap}
            >
              Arrow Nap
            </Typography>

            {!session && (
              <div>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={2} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 0 }}
              >
                <MenuIcon />
              </IconButton> */}
                <Link href="/signin" passHref>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {/* <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={auth}
                        onChange={handleChange}
                        aria-label="login switch"
                      />
                    }
                    label={auth ? "Logout" : "Login"}
                  />
                </FormGroup> */}

                    {/* <MenuItem onClick={handleClose}>Login With Email</MenuItem> */}
                    {/* <MyButton onClick={handleClose} color="blue">
                    Login With Email
                    <AlternateEmailIcon />
                  </MyButton>
                  <Divider />
                  <React.Fragment>
                    <MyButton onClick={handleClose} color="red">
                      <Image
                        src="/google.svg"
                        height={"30%"}
                        width={"30%"}
                        alt=""
                      />
                    </MyButton>
                    <MyButton onClick={handleClose} color="blue">
                      <Image
                        src="/face.ico"
                        height={"30%"}
                        width={"30%"}
                        alt=""
                      />
                    </MyButton>
                  </React.Fragment> */}
                    <center>
                      {/* <Image
                        src="/brush-teeth.png"
                        height={200}
                        width={200}
                        alt=""
                      />*/}
                      <PersonPinIcon className={styles.person} />
                    </center>
                    <center>
                      {" "}
                      <Button
                        onClick={handleClose}
                        variant="outlined"
                        className={styless.sidebartweets}
                        Width
                      >
                        Sign In
                      </Button>
                    </center>
                  </Menu>
                </Link>
              </div>
            )}

            {session && (
              <div>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={2} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Tooltip title="Open settings">
                    <Avatar alt="You" src="/logo.png" />
                  </Tooltip>
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                   <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
                  <MenuItem onClick={handleClose}>Your Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  {/* <MenuItem onClick={handleClose}>Sign out</MenuItem>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={auth}
                          onChange={handleChange}
                          aria-label="login switch"
                        />
                      }
                      label={auth ? "Logout" : "Login"}
                    />
                  </FormGroup> */}
                </Menu>
              </div>
            )}

            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <span
                  style={{ fontSize: "0" }}
                  onClick={toggleDrawer(anchor, true)}
                >
                  {anchor}

                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 0 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </span>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}
