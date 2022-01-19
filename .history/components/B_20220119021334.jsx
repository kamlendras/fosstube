import React from "react";
import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import QuickreplyRoundedIcon from "@mui/icons-material/QuickreplyRounded";
import styles from "/styles/Nav.module.scss";


export default function B() {
  return (
    <span>
     
       
            <Link href="/" passHref> <span>
              <button className={styles.Home}>
                <HomeRoundedIcon className={styles.i1} /> Home
              </button>
            </Link></span>
        
          <span>  <Link href="/Code" passHref>
              <button className={styles.Code}>
                <CodeRoundedIcon className={styles.i2} /> Code
              </button>
            </Link></span>
        
            <span><Link href="/Courses" passHref>
              <button className={styles.Courses}>
                <BookRoundedIcon className={styles.i3} />
                Courses
              </button>
            </Link></span>
          
             <span><Link href="/Explore" passHref>
              <button className={styles.explore}>
                <ExploreRoundedIcon className={styles.i4} /> Explore
              </button>
            </Link></span>
        
             <span><Link href="/Ask" passHref>
              <button className={styles.Ask}>
                <QuickreplyRoundedIcon className={styles.i5} /> Ask
              </button>
        
              </Link></span>

            </span>
     
    
    
  );
}
