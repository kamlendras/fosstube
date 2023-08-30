import React, { useState, useEffect } from "react";
import Chatbox from "./chatbox";
import Feed from "./feed";
import Post from "./ask1";
import db from "./firebase";
import FlipMove from "react-flip-move";
import styles from "../styles/Ask.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Link from 'next/link'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

    const [ask, setask] = useState([]);
  
    useEffect(() => {
      db.collection("ask").onSnapshot((snapshot) =>
        setask(snapshot.docs.map((doc) => doc.data()))
      );
    }, []);
  
    const { data: session, status } = useSession();
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

 

  return (
    <div className={styles.feed}>
    <div className={styles.feed__header}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
         
          <Tab label="ask" {...a11yProps(0)} />
       
          <Tab label="answer" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      </div>
      <SwipeableViews

        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Chatbox />
        <Feed/>
     
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Feed/>
        </TabPanel>
        
      </SwipeableViews>
   
    </div>
  );
}
