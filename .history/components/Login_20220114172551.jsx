import styles from "../styles/Home.module.css";
import ReactTyped from "react-typed";
import Search from "./Search";
import B from "./B";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Fade from 'react-reveal/Fade';
import { signIn, signOut, useSession } from "next-auth/react";
import * as React from "react";
const useStyles = makeStyles({
  root: {
    color: "red",
    "& p": {
      margin: 0,
      color: "green",
      "& span": {
        color: "blue",
      },
    },
  },
});
const Login = (props) => {

  const { data: session, status } = useSession();
  return (
    <div className={styles.Container}>
      <div className={styles.Nav}>
        <a className={styles.ha}>
          <Image src="/arrow.svg" alt="" height={60} width={60} />
        </a>

        <>
          {" "}
          <Search />
        </>

        <div className={styles.ox}>
          <Link href="/signin" className={styles.tel} passHref>
            <a className={styles.Join}>Join Now</a>
          </Link>

          {!session && (
             <a
             href={`/api/auth/signin`}
             className={styles.buttonPrimary}
             onClick={(e) => {
               e.preventDefault()
               signIn()
             }}
           > <span className={styles.tel} >
            <a className={styles.SignIn}>Sign in</a>
          </span></a>
)}

{session && (
                <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              > <span className={styles.tel} >
            <a className={styles.SignIn}>Sign out</a>
          </span></a>
)}

        </div>
      </div>
      <div>
        <B />
      </div>

      <div className={styles.Section}>
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <span className={styles.hb}>
              <ReactTyped
                loop
                typeSpeed={100}
                backSpeed={40}
                strings={[
                  "Hi there.",
                  "Welcome to your professional coding community.",
                  "Learn to code for free.",
                  "Cheat code for free.",
                  "Get source code for free.",
                ]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="<h1>|</h1>"
              />
            </span>
            {!session && (
              <Grid className={styles.authg} item xs={9}>
                <span className={styles.Form}>
                  <span className={styles.Google}>
                    <Image
                      src="/google.svg"
                      height={"30%"}
                      width={"30%"}
                      alt=""
                    />
                    Sign in with Google
                  </span>
                </span>
              </Grid>
)}

{session && (
              <Grid className={styles.authg} item xs={9}>
                <span className={styles.Form}>
                  <span className={styles.Google}>
                    <Image
                      src="/cf.svg"
                      height={"30%"}
                      width={"30%"}
                      alt=""
                    />
                    Get Certificate
                  </span>
                </span>
              </Grid>
)}


           
          </Grid>
          <Grid item xs={6}>
          <Fade bottom>   <Image src="/mess.svg" alt="" height={512} width={512} /> </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
