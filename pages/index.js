import Head from "next/head";
import Plus from "../components/Plus";
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
import UsedBy from "../components/UsedBy";
import Design from "../components/Design";
export default function Home() {
  return (
    <div className="dark:bg-black width-max height-max">
      <Head>
        <title>CodNap</title>
        <meta
          name="description"
          content="CodNap| CodNap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="/codnapwhite.svg" />
      </Head>
      
      <Plus />
      <New/>
 
      <UsedBy/>
      <WhatCanYouDo/>
      <Design/>
      <Post3/>
     
      <OurFeatures/>

  <Newsroom/>
      <QA/>
      <NewsLetter/>
      <Footer />
    </div>
  );
}
