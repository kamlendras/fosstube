import Head from "next/head";
import Plus from "../components/Plus";
import Post3 from "../components/Post3";
import WhatCanYouDo from "../components/WhatCanYouDo";
import Main from "../components/Main";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { SpaceBarTwoTone } from "@material-ui/icons";
import OurFeatures from "../components/OurFeatures";
import Newsroom from "../components/Newsroom";

export default function Home() {
  return (
    <>
      <Head>
        <title>CodNap</title>
        <meta
          name="description"
          content="CodNap| CodNap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="/codnapwhite.svg" />
      </Head>
      
      <Plus />
      <Main />
      <WhatCanYouDo/>
      <Post3/>
     
      <OurFeatures/>

  <Newsroom/>
      <Accordion />
      <Footer />
    </>
  );
}
