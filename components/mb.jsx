import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation sx={{ width: '100%' }} value={value} onChange={handleChange}>
    <Link to="/">   <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
      /></Link>
    

    <Link to="/code">     <BottomNavigationAction
        label="Search"
        value="nearby"
        icon={<SearchIcon />}
      /></Link>
   
   <Link to="/account">       <BottomNavigationAction
        label="You"
        value="AccountBox"
        icon={<AccountBoxIcon />}
      /></Link>
  <Link to="/menu">    <BottomNavigationAction
        label="Menu"
        value="Menu"
        icon={<MenuIcon />}
      /></Link>
    </BottomNavigation>
    </Paper>
  );
}
