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
        <a>
          <SidebarOption Icon={HomeIcon} text="    Home" />
        </a>
      </Link>
      <Link
        activeClassName="active"
        href="/Code"
        className={styles.cc4}
        passHref
      >
        <a>
          <SidebarOption Icon={CodeOutlinedIcon} text="Code" />
        </a>
      </Link>
      <Link
        href="/Courses"
        activeClassName="active"
        className={styles.cc4}
        passHref
      >
        <a>
          <SidebarOption Icon={BookOutlinedIcon} text="Courses" />
        </a>
      </Link>

      <Link
        activeClassName="active"
        href="/Explore"
        className={styles.cc4}
        passHref
      >
        <a>
          <SidebarOption Icon={ExploreOutlinedIcon} text="Explore" />
        </a>
      </Link>
      <Link
        activeClassName="active"
        href="/Favorites"
        className={styles.cc4}
        passHref
      >
        <a>
          <SidebarOption Icon={FavoriteBorderOutlinedIcon} text="Favorites" />
        </a>
      </Link>
      <Link
        activeClassName="active"
        href="/Bookmarks"
        className={styles.cc4}
        passHref
      >
        <a>
          <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
        </a>
      </Link>

      <Link
        activeClassName="active"
        href="/Account"
        className={styles.cc4}
        passHref
      >
        <a>
          <SidebarOption Icon={PermIdentityOutlinedIcon} text="Account" />
        </a>
      </Link>

      <Button variant="outlined" className={styles.sidebartweet} fullWidth>
        Ask
      </Button>
    </div>
  );
}

export default Sidebar;
