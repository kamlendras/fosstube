import QuickreplyIcon from '@mui/icons-material/Quickreply';
import SidebarOption from "./SidebarOption";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import Button from '@mui/material/Button';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import styles from "../styles/Ask.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <QuickreplyIcon className={styles.sidebartwitterIcon} />
      {/* <SidebarOption active Icon={HomeIcon} text="Home" /> */}
      <SidebarOption  Icon={CodeOutlinedIcon} text="Code" />
      <SidebarOption  Icon={ BookOutlinedIcon} text="Courses" />
      <SidebarOption Icon={ExploreOutlinedIcon} text="Explore" />
      <SidebarOption  Icon={FavoriteBorderIcon} text="Favorites" />
      <SidebarOption Icon={BookmarkAddOutlinedIcon} text="Bookmarks" />
      <SidebarOption Icon={PermIdentityIcon} text="Account" />
     <Button variant="outlined" className={styles.sidebartweet} fullWidth>
        Ask
      </Button>
    </div>
  );
}

export default Sidebar;