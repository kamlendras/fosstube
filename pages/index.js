import Head from "next/head";
import Plus from "../components/Plus";
import Link from "next/link";
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import Post3 from "../components/Post3";
import WhatCanYouDo from "../components/WhatCanYouDo";
import New from "../components/New";
import QA from "../components/QA";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { SpaceBarTwoTone } from "@material-ui/icons";
import OurFeatures from "../components/OurFeatures";
import Newsroom from "../components/Newsroom";
import NewsLetter from "../components/NewsLetter";
import Code from "../components/Code";
import UsedBy from "../components/UsedBy";
import Design from "../components/Design";
import NavBar from "../components/NavBar";
import CodeCardData from "../components/CodeCardData";
import styles from "../styles/Code.module.css"
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import QuickreplyRoundedIcon from "@mui/icons-material/QuickreplyRounded";
import Stack from "@mui/material/Stack";
export default function Home() {
  return (
    <div className="dark:bg-black width-max height-max">
      <Head>
        <title>CODE</title>
        <meta
          name="description"
          content="CODE | CODE is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="/codnapwhite.svg" />
      </Head>
      <div>
      <NavBar p={"fixed"}/>
    </div>
    <Code/>

      {/* <Stack direction="row" spacing={2}>
        <Link href="/Code" legacyBehavior>
          <button class=" ml-5 bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <CodeRoundedIcon className={styles.i2} /> Code
          </button>
        </Link>
        <Link href="/Courses" legacyBehavior>
          <button class="bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <BookRoundedIcon className={styles.i3} /> Courses
          </button>
        </Link>
        <Link href="/Explore" legacyBehavior>
          <button class="bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <ExploreRoundedIcon className={styles.i4} /> Explore
          </button>
        </Link>
        <Link href="/Ask" legacyBehavior>
          <button class="bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <QuickreplyRoundedIcon className={styles.i5} /> Ask
          </button>
        </Link>
        <Link href="/news" legacyBehavior>
          <button class="bg-m hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            < NewspaperRoundedIcon /> News
          </button>
        </Link>
      </Stack> */}
  
    
      <Plus />
 
     
    
    </div>
  );
}

