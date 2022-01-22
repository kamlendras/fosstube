exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 5275:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "Code_grid__2uggg",
	"body": "Code_body__oCh6_",
	"icodev": "Code_icodev__rpMC_"
};


/***/ }),

/***/ 2742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Icode)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(8330);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
// EXTERNAL MODULE: external "@mui/icons-material/FavoriteBorder"
var FavoriteBorder_ = __webpack_require__(6910);
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_);
// EXTERNAL MODULE: external "@mui/icons-material/Favorite"
var Favorite_ = __webpack_require__(7372);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
// EXTERNAL MODULE: external "@mui/icons-material/BookmarkBorder"
var BookmarkBorder_ = __webpack_require__(9238);
var BookmarkBorder_default = /*#__PURE__*/__webpack_require__.n(BookmarkBorder_);
// EXTERNAL MODULE: external "@mui/icons-material/Bookmark"
var Bookmark_ = __webpack_require__(2682);
var Bookmark_default = /*#__PURE__*/__webpack_require__.n(Bookmark_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Snackbar"
var Snackbar_ = __webpack_require__(9174);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: ./components/Napico.jsx












const label = {
    inputProps: {
        'aria-label': 'Checkbox demo'
    }
};
function Napico() {
    function handleClick(message) {
        return ()=>{
            setSnackPack((prev)=>[
                    ...prev,
                    {
                        message,
                        key: new Date().getTime()
                    }
                ]
            );
        };
    }
    const handleClose = (event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleExited = ()=>{
        setMessageInfo(undefined);
    };
    const [snackPack, setSnackPack] = external_react_default().useState([]);
    const [open, setOpen] = external_react_default().useState(false);
    const [messageInfo, setMessageInfo] = external_react_default().useState(undefined);
    external_react_default().useEffect(()=>{
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({
                ...snackPack[0]
            });
            setSnackPack((prev)=>prev.slice(1)
            );
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [
        snackPack,
        messageInfo,
        open
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: handleClick("Add to Favorites"),
                children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                    ...label,
                    icon: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {
                    }),
                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: handleClick("Add to Bookmark"),
                children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                    ...label,
                    icon: /*#__PURE__*/ jsx_runtime_.jsx((BookmarkBorder_default()), {
                    }),
                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Bookmark_default()), {
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Snackbar_default()), {
                open: open,
                autoHideDuration: 6000,
                onClose: handleClose,
                TransitionProps: {
                    onExited: handleExited
                },
                message: messageInfo ? messageInfo.message : undefined,
                action: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            color: "primary",
                            size: "small",
                            onClick: handleClose,
                            children: "UNDO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            "aria-label": "close",
                            color: "inherit",
                            sx: {
                                p: 0.5
                            },
                            onClick: handleClose,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                            })
                        })
                    ]
                })
            }, messageInfo ? messageInfo.key : undefined)
        ]
    }));
}
/* harmony default export */ const components_Napico = (Napico);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/DialogActions"
var DialogActions_ = __webpack_require__(9404);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@mui/material/DialogContentText"
var DialogContentText_ = __webpack_require__(2268);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);
// EXTERNAL MODULE: external "@mui/material/DialogTitle"
var DialogTitle_ = __webpack_require__(2468);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
;// CONCATENATED MODULE: ./components/Napicologin.jsx














const Napicologin_label = {
    inputProps: {
        'aria-label': 'Checkbox demo'
    }
};
function Napicologin() {
    const [open, setOpen] = external_react_default().useState(false);
    const theme = (0,styles_.useTheme)();
    const fullScreen = useMediaQuery_default()(theme.breakpoints.down('md'));
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: handleClickOpen,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                    ...Napicologin_label,
                    icon: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {
                    }),
                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: handleClickOpen,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                    ...Napicologin_label,
                    icon: /*#__PURE__*/ jsx_runtime_.jsx((BookmarkBorder_default()), {
                    }),
                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((BookmarkBorder_default()), {
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                    fullScreen: fullScreen,
                    open: open,
                    onClose: handleClose,
                    "aria-labelledby": "responsive-dialog-title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                            id: "responsive-dialog-title",
                            children: "You are not Logined Yet!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                                children: "Login to save your Favorites, Bookmarks and enjoy personalisation."
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    autoFocus: true,
                                    onClick: handleClose,
                                    children: "Close"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `/api/auth/signin`,
                                    //  className={styles.buttonPrimary}
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        (0,react_.signIn)();
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        onClick: handleClose,
                                        autoFocus: true,
                                        children: "Login"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
}
/* harmony default export */ const components_Napicologin = (Napicologin);

// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/CardMedia"
var CardMedia_ = __webpack_require__(6731);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardActions"
var CardActions_ = __webpack_require__(3691);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(5732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/icons-material/Share"
var Share_ = __webpack_require__(8234);
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/icons-material/MoreVert"
var MoreVert_ = __webpack_require__(6952);
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_);
// EXTERNAL MODULE: external "@mui/material/Skeleton"
var Skeleton_ = __webpack_require__(441);
var Skeleton_default = /*#__PURE__*/__webpack_require__.n(Skeleton_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
;// CONCATENATED MODULE: ./components/Nap.jsx




















const Nap_label = {
    inputProps: {
        'aria-label': 'Checkbox demo'
    }
};
const ExpandMore = (0,styles_.styled)((props)=>{
    const { expand , ...other } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        ...other
    }));
})(({ theme , expand  })=>({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    })
);
function Nap(props) {
    const [expanded, setExpanded] = external_react_.useState(false);
    const handleExpandClick = ()=>{
        setExpanded(!expanded);
    };
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 1);
    }, []);
    const { data: session , status  } = (0,react_.useSession)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
            spacing: 1,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                variant: "rectangular",
                width: 345,
                height: 390
            })
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
            sx: {
                maxWidth: 345
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                    avatar: props.a,
                    action: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        "aria-label": "settings",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((MoreVert_default()), {
                        })
                    }),
                    title: props.n,
                    subheader: props.d
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                    component: "img",
                    height: "194",
                    image: props.i,
                    alt: "No Internet",
                    width: 100
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body1",
                        color: "text.primary",
                        children: props.t
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActions_default()), {
                    disableSpacing: true,
                    children: [
                        !session && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Napicologin, {
                            })
                        }),
                        session && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Napico, {
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            "aria-label": "share",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ExpandMore, {
                            expand: expanded,
                            onClick: handleExpandClick,
                            "aria-expanded": expanded,
                            "aria-label": "show more",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                    in: expanded,
                    timeout: "auto",
                    unmountOnExit: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: props.p
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: props.pp
                            })
                        ]
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./styles/Code.module.css
var Code_module = __webpack_require__(5275);
var Code_module_default = /*#__PURE__*/__webpack_require__.n(Code_module);
;// CONCATENATED MODULE: ./components/Icode.jsx








function refreshMessages() {
    const getRandomInt = (max)=>Math.floor(Math.random() * Math.floor(max))
    ;
    return Array.from(new Array(10)).map(()=>messageExamples[getRandomInt(messageExamples.length)]
    );
}
const Item = (0,styles_.experimentalStyled)((Paper_default()))(({ theme  })=>({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    })
);
function Icode() {
    const [value, setValue] = external_react_.useState(0);
    const ref = external_react_.useRef(null);
    const [messages, setMessages] = external_react_.useState(()=>refreshMessages()
    );
    external_react_.useEffect(()=>{
        setMessages(refreshMessages());
    }, [
        value,
        setMessages
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: messages.map(({ a , url , n , d , i , t , p , pp  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    "  ",
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Code_module_default()).grid,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Nap, {
                            a: a,
                            url: url,
                            n: n,
                            d: d,
                            i: i,
                            t: t,
                            p: p,
                            pp: pp
                        })
                    })
                ]
            })
        )
    }));
};
const messageExamples = [
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small"
        }),
        url: "Code/Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://assets.codepen.io/14089/internal/screenshots/pens/ZEBYEOm.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1613843076&width=960',
        t: 'Making Pizza By Pure CSS.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "/Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://i.ytimg.com/vi/0lynCRmkqqE/maxresdefault.jpg',
        t: 'Making Buttons By Pure CSS.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
        t: 'Making Custom Search Engine with JavaScript.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://programmersought.com/images/223/f67c50ffa91f72c2c125f8fea4a85d3f.JPEG',
        t: 'Making Custom Loading Bar.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://codemyui.com/wp-content/uploads/2017/03/menu-button.gif',
        t: 'Simple Hamburger Menu to X Mark Animation.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://i.ytimg.com/vi/68O6eOGAGqA/maxresdefault.jpg',
        t: 'Making Grid.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://www.markuptag.com/wp-content/uploads/Simple-login-form-with-social-login-buttons-using-HTML-and-CSS.jpg',
        t: 'Simple login form with social login buttons using HTML and CSS.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://i.ytimg.com/vi/52ZLjnTPPl4/maxresdefault.jpg',
        t: 'Responsive Footer Design using CSS Flexbox.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
        t: 'Making Custom Search Engine with JavaScript.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
        t: 'Making Custom Search Engine with JavaScript.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
        t: 'Making Custom Search Engine with JavaScript.',
        p: 'h',
        pp: 'h'
    },
    {
        a: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: "/img/logo.png"
        }),
        url: "Sourcecode",
        n: 'Arrow Nap',
        d: 'September 14, 2020',
        i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
        t: 'Making Custom Search Engine with JavaScript.',
        p: 'h',
        pp: 'h'
    }, 
];


/***/ })

};
;