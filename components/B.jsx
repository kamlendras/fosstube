import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import QuickreplyRoundedIcon from "@mui/icons-material/QuickreplyRounded";
import styles from "/styles/Nav.module.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
export default function B() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs="auto">
          <span>
            <Link href="/" passHref>
              <button className={styles.Home}>
                <HomeRoundedIcon className={styles.i1} /> Home
              </button>
            </Link>
          </span>
        </Grid>
        <Grid item xs="auto">
          <span>
            <Link href="/Code" passHref>
              <button className={styles.Code}>
                <CodeRoundedIcon className={styles.i2} /> Code
              </button>
            </Link>
          </span>{" "}
        </Grid>
        <Grid item xs="auto">
          <span>
            <Link href="/Courses" passHref>
              <button className={styles.Courses}>
                <BookRoundedIcon className={styles.i3} />
                Courses
              </button>
            </Link>
          </span>
        </Grid>
        <Grid item xs="auto">
          <span>
            <Link href="/Explore" passHref>
              <button className={styles.explore}>
                <ExploreRoundedIcon className={styles.i4} /> Explore
              </button>
            </Link>
          </span>
        </Grid>
        <Grid item xs>
          <span>
            <Link href="/Ask" passHref>
              <button className={styles.Ask}>
                <QuickreplyRoundedIcon className={styles.i5} /> Ask
              </button>
            </Link>
          </span>
        </Grid>
      </Grid>
    // </Box>
  );
}
