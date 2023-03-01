import React from "react";
import styles from "../styles/Ask.module.css";
import Link from "next/link";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import Button from "@mui/material/Button";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
function Sidebar() {
  return (
    <div className={styles.sidebar1}>
      <Link activeClassName="active" href="/" className={styles.cc4} passHref>
        
          <SidebarOption Icon={HomeIcon} text="    Home" />
        
      </Link>
      <Link
        activeClassName="active"
        href="/Code"
        className={styles.cc4}
        passHref
      >
      
          <SidebarOption Icon={CodeOutlinedIcon} text="Code" />
        
      </Link>
      <Link
        href="/Courses"
        activeClassName="active"
        className={styles.cc4}
        passHref
      >
        
          <SidebarOption Icon={BookOutlinedIcon} text="Courses" />
        
      </Link>

      <Link
        activeClassName="active"
        href="/Explore"
        className={styles.cc4}
        passHref
      >
        
          <SidebarOption Icon={ExploreOutlinedIcon} text="Explore" />
        
      </Link>
      <Link
        activeClassName="active"
        href="/Favorites"
        className={styles.cc4}
        passHref
      >
        
          <SidebarOption Icon={FavoriteBorderOutlinedIcon} text="Favorites" />
        
      </Link>
      <Link
        activeClassName="active"
        href="/Bookmarks"
        className={styles.cc4}
        passHref
      >
        
          <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
        
      </Link>

      <Link
        activeClassName="active"
        href="/Account"
        className={styles.cc4}
        passHref
      >
        
          <SidebarOption Icon={PermIdentityOutlinedIcon} text="Account" />
        
      </Link>

      <Button variant="outlined" className={styles.sidebartweet} fullWidth>
        Ask
      </Button>
    </div>
  );
}

export default Sidebar;
