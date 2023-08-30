import Head from "next/head";
import Qa from "/components/qa";
import Footer from "/components/footer";
import styled from "@emotion/styled";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import SpaceBarTwoToneIcon from '@mui/icons-material/SpaceBarTwoTone';
import Images from "/components/about/images"
import Appbar from "/components/about/appbar"
import Toolbar from '@mui/material/Toolbar';
import Text from '/components/about/text'
import Cardgrid from "/components/about/cardgrid";
export default function Habout() {
  return (
    <div >
      <Head>
        <title>codnap</title>
        <meta
          name="description"
          content="codnap | codnap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="/codnapwhite.svg" />
      </Head>
      <Appbar/>
      <Toolbar/>
  <Images/>
      <Text/>
      <Cardgrid/>
    
    

  
      <Qa/>
 
      <Footer />
     
    
    </div>
  );
}