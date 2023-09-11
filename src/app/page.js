import Head from "next/head";

import Toolbar from '@mui/material/Toolbar';
import styles from "./styles/Favorites.module.css";
import Cardgrid from './components/home/cardgrid'
import Copyright2 from './components/copyright2'
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
        <div className="leftspace">
        <span >
            <Cardgrid/>
          </span>

          {/* <span >
          <Copyright2 />
        </span> */}
        </div>








    </>
  );
}

