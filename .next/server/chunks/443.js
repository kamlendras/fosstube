"use strict";
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 9443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MenuAppBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/AccountCircle"
var AccountCircle_ = __webpack_require__(1883);
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/Menu"
var material_Menu_ = __webpack_require__(8125);
var material_Menu_default = /*#__PURE__*/__webpack_require__.n(material_Menu_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/styles"
var external_mui_styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Badge"
var Badge_ = __webpack_require__(5168);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
// EXTERNAL MODULE: external "@mui/icons-material/Notifications"
var Notifications_ = __webpack_require__(1567);
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./styles/Ask.module.css
var Ask_module = __webpack_require__(3373);
var Ask_module_default = /*#__PURE__*/__webpack_require__.n(Ask_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/SidebarOption.js
var SidebarOption = __webpack_require__(9755);
// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__(9904);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);
// EXTERNAL MODULE: external "@material-ui/icons/BookmarkBorderOutlined"
var BookmarkBorderOutlined_ = __webpack_require__(5932);
var BookmarkBorderOutlined_default = /*#__PURE__*/__webpack_require__.n(BookmarkBorderOutlined_);
// EXTERNAL MODULE: external "@material-ui/icons/PermIdentityOutlined"
var PermIdentityOutlined_ = __webpack_require__(180);
var PermIdentityOutlined_default = /*#__PURE__*/__webpack_require__.n(PermIdentityOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/CodeOutlined"
var CodeOutlined_ = __webpack_require__(6131);
var CodeOutlined_default = /*#__PURE__*/__webpack_require__.n(CodeOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/BookOutlined"
var BookOutlined_ = __webpack_require__(5915);
var BookOutlined_default = /*#__PURE__*/__webpack_require__.n(BookOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/ExploreOutlined"
var ExploreOutlined_ = __webpack_require__(2092);
var ExploreOutlined_default = /*#__PURE__*/__webpack_require__.n(ExploreOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/FavoriteBorderOutlined"
var FavoriteBorderOutlined_ = __webpack_require__(5967);
var FavoriteBorderOutlined_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorderOutlined_);
;// CONCATENATED MODULE: ./components/Dr.jsx













function Sidebar() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Ask_module_default()).sidebar1,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                activeClassName: "active",
                href: "/",
                className: (Ask_module_default()).cc4,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarOption/* default */.Z, {
                        Icon: (Home_default()),
                        text: " Home"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                activeClassName: "active",
                href: "/Code",
                className: (Ask_module_default()).cc4,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarOption/* default */.Z, {
                        Icon: (CodeOutlined_default()),
                        text: "Code"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/Courses",
                activeClassName: "active",
                className: (Ask_module_default()).cc4,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarOption/* default */.Z, {
                        Icon: (BookOutlined_default()),
                        text: "Courses"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                activeClassName: "active",
                href: "/Explore",
                className: (Ask_module_default()).cc4,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarOption/* default */.Z, {
                        Icon: (ExploreOutlined_default()),
                        text: "Explore"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                activeClassName: "active",
                href: "/Favorites",
                className: (Ask_module_default()).cc4,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarOption/* default */.Z, {
                        Icon: (FavoriteBorderOutlined_default()),
                        text: "Favorites"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                activeClassName: "active",
                href: "/Bookmarks",
                className: (Ask_module_default()).cc4,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarOption/* default */.Z, {
                        Icon: (BookmarkBorderOutlined_default()),
                        text: "Bookmarks"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                activeClassName: "active",
                href: "/Account",
                className: (Ask_module_default()).cc4,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarOption/* default */.Z, {
                        Icon: (PermIdentityOutlined_default()),
                        text: "Account"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                variant: "outlined",
                className: (Ask_module_default()).sidebartweet,
                fullWidth: true,
                children: "Ask"
            })
        ]
    }));
}
/* harmony default export */ const Dr = (Sidebar);

// EXTERNAL MODULE: external "@mui/material/SwipeableDrawer"
var SwipeableDrawer_ = __webpack_require__(4180);
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: ./styles/Nav.module.scss
var Nav_module = __webpack_require__(9358);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
// EXTERNAL MODULE: external "@mui/material/useScrollTrigger"
var useScrollTrigger_ = __webpack_require__(4156);
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_);
// EXTERNAL MODULE: external "@mui/icons-material/PersonPin"
var PersonPin_ = __webpack_require__(3023);
var PersonPin_default = /*#__PURE__*/__webpack_require__.n(PersonPin_);
;// CONCATENATED MODULE: ./components/Nv.jsx




























const ColorModeContext = /*#__PURE__*/ external_react_.createContext({
    toggleColorMode: ()=>{
    }
});
const Item = (0,styles_.styled)((Paper_default()))(({ theme  })=>({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
    })
);
const useStyles = (0,external_mui_styles_.makeStyles)({
    root: {
        background: (props)=>props.color === "red" ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
        ,
        border: 0,
        borderRadius: 3,
        boxShadow: (props)=>props.color === "red" ? "0 3px 5px 2px rgba(255, 105, 135, .3)" : "0 3px 5px 2px rgba(33, 203, 243, .3)"
        ,
        color: "white",
        height: 48,
        padding: "0 30px",
        margin: 8
    }
});
function MyButton(props) {
    const { color , ...other } = props;
    const classes = useStyles(props);
    return(/*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        className: classes.root,
        ...other
    }));
}
MyButton.propTypes = {
    color: external_prop_types_default().oneOf([
        "blue",
        "red"
    ]).isRequired
};
function ElevationScroll(props) {
    const { children , window  } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger_default()({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });
    return(/*#__PURE__*/ external_react_.cloneElement(children, {
        elevation: trigger ? 4 : 0
    }));
}
ElevationScroll.propTypes = {
    children: (external_prop_types_default()).element.isRequired,
    /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */ window: (external_prop_types_default()).func
};
function MenuAppBar(props) {
    const [state, setState] = external_react_.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const toggleDrawer = (anchor, open)=>(event)=>{
            if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setState({
                ...state,
                [anchor]: open
            });
        }
    ;
    const list = (anchor)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250
            },
            role: "presentation",
            onClick: toggleDrawer(anchor, false),
            onKeyDown: toggleDrawer(anchor, false),
            children: /*#__PURE__*/ jsx_runtime_.jsx(Dr, {
            })
        })
    ;
    // const [auth, setAuth] = React.useState(false);
    const { data: session , status  } = (0,react_.useSession)();
    const loading = status === "loading";
    const [anchorEl, setAnchorEl] = external_react_.useState(null);
    const handleChange = (event)=>{
        setAuth(event.target.checked);
    };
    const handleMenu = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    function MyApp() {
        const theme = (0,styles_.useTheme)();
        const colorMode = external_react_.useContext(ColorModeContext);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: (Nav_module_default()).nav,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                flexGrow: 1
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(ElevationScroll, {
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                    position: props.p,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                component: "div",
                                sx: {
                                    flexGrow: 1
                                },
                                className: "nap",
                                children: "Arrow Nap"
                            }),
                            !session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "large",
                                        "aria-label": "show 17 new notifications",
                                        color: "inherit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                                            badgeContent: 2,
                                            color: "error",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Notifications_default()), {
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "large",
                                        "aria-label": "account of current user",
                                        "aria-controls": "menu-appbar",
                                        "aria-haspopup": "true",
                                        onClick: handleMenu,
                                        color: "inherit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((material_Menu_default()), {
                                        id: "menu-appbar",
                                        anchorEl: anchorEl,
                                        anchorOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        keepMounted: true,
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        open: Boolean(anchorEl),
                                        onClose: handleClose,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((PersonPin_default()), {
                                                    className: (Home_module_default()).person
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: `/api/auth/signin`,
                                                    className: (Home_module_default()).buttonPrimary,
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        (0,react_.signIn)();
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                            onClick: handleClose,
                                                            variant: "outlined",
                                                            className: (Ask_module_default()).sidebartweets,
                                                            Width: true,
                                                            children: "Sign In"
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "large",
                                        "aria-label": "show 17 new notifications",
                                        color: "inherit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                                            badgeContent: 2,
                                            color: "error",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Notifications_default()), {
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "large",
                                        "aria-label": "account of current user",
                                        "aria-controls": "menu-appbar",
                                        "aria-haspopup": "true",
                                        onClick: handleMenu,
                                        color: "inherit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            title: "Open settings",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                alt: "You",
                                                src: "/logo.png"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((material_Menu_default()), {
                                        id: "menu-appbar",
                                        anchorEl: anchorEl,
                                        anchorOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        keepMounted: true,
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        open: Boolean(anchorEl),
                                        onClose: handleClose,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: (Home_module_default()).signedInText,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Signed in as"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                        children: session.user.email || session.user.name
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                onClick: handleClose,
                                                children: "Your Profile"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                onClick: handleClose,
                                                children: "Settings"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: `/api/auth/signout`,
                                                className: (Home_module_default()).button,
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    (0,react_.signOut)();
                                                },
                                                children: "Sign out"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            [
                                "right"
                            ].map((anchor)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            style: {
                                                fontSize: "0"
                                            },
                                            onClick: toggleDrawer(anchor, true),
                                            children: [
                                                anchor,
                                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                    size: "large",
                                                    edge: "start",
                                                    color: "inherit",
                                                    "aria-label": "menu",
                                                    sx: {
                                                        mr: 0
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((SwipeableDrawer_default()), {
                                            anchor: anchor,
                                            open: state[anchor],
                                            onClose: toggleDrawer(anchor, false),
                                            onOpen: toggleDrawer(anchor, true),
                                            children: list(anchor)
                                        })
                                    ]
                                }, anchor)
                            )
                        ]
                    })
                })
            })
        })
    }));
};


/***/ })

};
;