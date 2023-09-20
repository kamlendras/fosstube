import Head from "next/head";

import Toolbar from '@mui/material/Toolbar';
import styles from "./styles/Favorites.module.css";
import Cardgrid from './components/home/cardgrid'
import Chips from './components/chips'
export default function C() {
  return (
    <>
      <Head>
        <title>codnap</title>
        <meta
          name="description"
          content="Code The World"
        />
        <link rel="icon" href="/codnapwhite.svg" />
      </Head>

    <Toolbar/>


      
        
       
        <span >
          <Chips/>
            <Cardgrid/>
          </span>

         
        








    </>
  );
}

