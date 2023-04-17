import Head from "next/head";


import QA from "/components/QA";
import Footer from "/components/Footer";
import styled from "@emotion/styled";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import SpaceBarTwoToneIcon from '@mui/icons-material/SpaceBarTwoTone';
import Images from "/components/about/images"
import Appbar from "/components/about/appbar"
import Toolbar from '@mui/material/Toolbar';
import Text from '/components/about/text'
import CardGrid from "/components/about/cardgrid";
export default function Home() {
  return (
    <div >
      <Head>
        <title>CodNap</title>
        <meta
          name="description"
          content="CodNap| CodNap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="/codnapwhite.svg" />
      </Head>
      <Appbar/>
      <Toolbar/>
  <Images/>
      <Text/>
      <CardGrid/>
    
    

  
      <QA/>
 
      <Footer />
     
    
    </div>
  );
}