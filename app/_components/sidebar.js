import QuickreplyIcon from '@mui/icons-material/Quickreply';
import Sidebaroption from "./sidebaroption";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import Button from '@mui/material/Button';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import styles from "../_styles/Ask.module.css";
import Link from 'next/link'
function Sidebar() {
  return (
    <div className={styles.sidebar}>
       {/* <QuickreplyIcon className={styles.sidebartwitterIcon} /> */}
      {/*<Link href="/"> <SidebarOption active Icon={HomeIcon} text="Home" /> </Link>*/}
      {/* <Link href="/Code"><SidebarOption  Icon={CodeOutlinedIcon} text="Code" /></Link> */}
      <Link href="/Courses"><Sidebaroption  Icon={ BookOutlinedIcon} text="Courses" /></Link>
      <Link href="/Explore"><Sidebaroption Icon={ExploreOutlinedIcon} text="Explore" /></Link>
      <Link href="/Favorites"><Sidebaroption  Icon={FavoriteBorderIcon} text="Favorites" /></Link>
      <Link href="/Bookmarks"><Sidebaroption Icon={BookmarkAddOutlinedIcon} text="Bookmarks" /></Link>
      <Link href="/Account"><Sidebaroption Icon={PermIdentityIcon} text="Account" /></Link>
     <Link href="/Ask"><Button variant="outlined" className={styles.sidebartweet} fullWidth>
        Ask / Answer
      </Button> </Link>
    </div>
  );
}

export default Sidebar;