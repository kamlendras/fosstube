import Link from "next/link";
import Search from "./Search";
import { signIn, signOut, useSession } from "next-auth/react";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import QuickreplyRoundedIcon from "@mui/icons-material/QuickreplyRounded";
import Stack from "@mui/material/Stack";
import ReactTyped from "react-typed";
import Fade from "react-reveal/Fade";
import styles from "../styles/Home.module.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Head from "next/head";
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});
const Main = (props) => {
  const { data: session, status } = useSession();
  return (
    <>
       <Head>
         
          <script async src="https://cse.google.com/cse.js?cx=7837bd8bdb141ae82"></script>
        </Head>
      <div class="flex space-x-4 mt-2">
        <a class="ml-2">
          <img src="/codnapwhite.svg" alt="" height={70} width={70} />
        </a>
          <Search />
          <ThemeToggle />
         <span class="whitespace-nowrap">
          <Link href="/community">
            <button
              type="button"
              class=" text-white-900 bg-white border border-gray-300 focus:outline-none
               hover:bg-m focus:ring-4 focus:ring-gray-200 font-medium rounded-full
                text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:text-white dark:border-blue-600
                 dark:hover:bg-m dark:hover:border-m dark:focus:ring-m"
            >
              Join Now
            </button>
          </Link>
          {!session && (
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <button
                type="button"
                class="text-m hover:text-white border border-m hover:bg-m focus:ring-4
                 focus:outline-none focus:ring-blue-300 font-medium rounded-full
                  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-m dark:text-m dark:hover:text-white 
                  dark:hover:bg-m dark:focus:ring-m"
              >
                Sign in
              </button>
            </a>
          )}

          {session && (
            <a
              href={`/api/auth/signout`}
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
          <Link href="/Code">
            <button class=" ml-5 bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              <CodeRoundedIcon className={styles.i2} /> Code
            </button>
          </Link>
          <Link href="/Courses">
            <button class="bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              <BookRoundedIcon className={styles.i3} /> Courses
            </button>
          </Link>
          <Link href="/Explore">
            <button class="bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              <ExploreRoundedIcon className={styles.i4} /> Explore
            </button>
          </Link>
          <Link href="/Ask">
            <button class="bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              <QuickreplyRoundedIcon className={styles.i5} /> Ask
            </button>
          </Link>
          <Link href="/news">
            <button class="bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              < NewspaperRoundedIcon /> News
            </button>
          </Link>
        </Stack>
      </div>
      
    <div className={styles.Section}>
    <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
        <div class="w-2.1/4 text-6xl text-blue-600 font-extralight">
          <ReactTyped
            loop
            typeSpeed={100}
            backSpeed={40}
            strings={[
              "Hi there.",
              "Welcome to your professional community.",
              "Join Nap Learning program.",
              "Enrole to courses.",
              "Solve your code query in seconds.",
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
        </div>
        <Grid item xs={12} md={6}>
        {!session && (
          <><center>
   <button type="button" class="mt-10 text-white bg-[#42a5f5] hover:bg-[#3b5998]/90 focus:ring-4
    focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-12 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
  <img src="/fb.svg" height={30} width={30}  />
  {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" data-original="#1877f2" class=""></path><path fill="#ffffff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" data-original="#ffffff" class=""></path></g></svg> */}
  
  Sign in with Facebook
</button></center>
<hr class="hr1"/>
<center>
<button type="button" class="text-white bg-[#90caf9] hover:bg-[#1da1f2]/90 focus:ring-4
 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-14 py-3 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
   <img src="/twitter.svg" height={30} width={30}  />
   Sign in with Twitter
</button></center>
        <hr class="hr1"/>
          <button
            type="button"
            class="  text-white bg-[#24292F] hover:bg-[#24292F]/90
             focus:ring-4 focus:outline-none focus:ring-[#24292F]/50
              font-medium rounded-lg text-sm px-16 py-3 text-center inline-flex items-center
               dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 "
          >
           <img src="/githubwhite.svg" height={30} width={30}  />
            Sign in with Github
          </button>

         
        </>
        )}

        {session && (
          <button
            type="button"
            class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            Sign in with Github
          </button>
        )}
     </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
        <Fade bottom>
          <img  src="/mess.svg" />
        </Fade>
        </Grid>
  
      </Grid>
    
    </div>
      
    </>
  );
};

export default Main;
