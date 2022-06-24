import styles from "../styles/Home.module.css";
import ReactTyped from "react-typed";
import Search from "./Search";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Fade from "react-reveal/Fade";
import { signIn, signOut, useSession } from "next-auth/react";
import * as React from "react";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import QuickreplyRoundedIcon from "@mui/icons-material/QuickreplyRounded";
import Stack from "@mui/material/Stack";
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
    <>
      <div class="flex space-x-4 mt-2">
        <a>
          <img src="/logo.svg" alt="" height={60} width={60} />
        </a>

        <>
          <Search />
        </>

        <span class="whitespace-nowrap ...">
          <Link href="/community">
            <button
              type="button"
              class=" text-white-900 bg-white border border-gray-300 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-600 dark:focus:ring-blue-700"
            >
              Join Now
            </button>
          </Link>
          {!session && (
            <a
              href={`/api/auth/signin`}
              className={styles.buttonPrimary}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <button
                type="button"
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
            </a>
          )}

          {session && (
            <a
              href={`/api/auth/signout`}
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              
              <button
                type="button"
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Sign out
              </button>
            </a>
          )}
        </span>
      </div>
      <div class="mt-3">
      <Stack direction="row" spacing={2}>
        <Link href="/code">
          <button class=" ml-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <CodeRoundedIcon className={styles.i2} /> Code
          </button>
        </Link>
        <Link href="/courses">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <BookRoundedIcon className={styles.i3} /> Courses
          </button>
        </Link>
        <Link href="/explore">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <ExploreRoundedIcon className={styles.i4} /> Explore
          </button>
        </Link>
        <Link href="/ask">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <QuickreplyRoundedIcon className={styles.i5} /> Ask
          </button>
        </Link>
      </Stack>
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
              <Grid className="authg" item xs={9}>
                <span className={styles.Form}>
                  <span className={styles.Google}>
                    <img
                      src="/google.svg"
                      height={"10%"}
                      width={"10%"}
                      alt=""
                    />
                    Sign in with Google
                  </span>
                </span>
              </Grid>
            )}

            {session && (
              <Grid className="authg" item xs={8}>
                <span className={styles.Form}>
                  <span className={styles.Google}>
                    <img src="/cf.svg" height={"10%"} width={"10%"} alt="" />
                    Get Certificate
                  </span>
                </span>
              </Grid>
            )}
          </Grid>
          <Grid item xs={6}>
            <Fade bottom>
              <img className={styles.messa} src="/mess.svg" height={400} />
            </Fade>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Login;
