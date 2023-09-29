import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CodeIcon from "@mui/icons-material/Code";
import BookIcon from "@mui/icons-material/Book";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import ExploreIcon from "@mui/icons-material/Explore";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const actions = [
  {
    icon: (
      <Link
        href="/Code"
        passHref
        style={{ color: "grey", position: "relative", top: "5px" }}
        legacyBehavior>
       
          <CodeIcon />
  
      </Link>
    ),
    name: "Code",
  },
  {
    icon: (
      <Link
        href="/Explore"
        passHref
        style={{ color: "grey", position: "relative", top: "5px" }}
        legacyBehavior>
  
          <ExploreIcon />
    
      </Link>
    ),
    name: "Explore",
  },
  {
    icon: (
      <Link
        href="/Courses"
        passHref
        style={{ color: "grey", position: "relative", top: "5px" }}
        legacyBehavior>
  
          <BookIcon />
    
      </Link>
    ),
    name: "Courses",
  },
  {
    icon: (
      <Link
        href="/Ask"
        passHref
        style={{ color: "grey", position: "relative", top: "5px" }}
        legacyBehavior>
  
          <QuickreplyIcon />
    
      </Link>
    ),
    name: "Ask",
  },
];

export default function Plus() {
    return (
      <span  className={styles.plus}>
<Link href="/Post" passHref legacyBehavior>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'fixed', bottom: 20, right: 20 }}  
        icon={<SpeedDialIcon openIcon={            <EditIcon /> } />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
      </Link></span>
    );
  }