import QuickreplyIcon from '@mui/icons-material/Quickreply';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CodeIcon from '@mui/icons-material/Code';
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import styles from "../styles/Ask.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <QuickreplyIcon className={styles.sidebartwitterIcon} />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption  Icon={CodeIcon} text="Code" />
      <SidebarOption  Icon={BookIcon} text="Courses" />
      <SidebarOption Icon={ExploreIcon} text="Explore" />
      <SidebarOption  Icon={FavoriteOutlinedIcon} text="Favorites" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={PermIdentityIcon} text="Account" />
     <Button variant="outlined" className={styles.sidebartweet} fullWidth>
        Ask
      </Button>
    </div>
  );
}

export default Sidebar;