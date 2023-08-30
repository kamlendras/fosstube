import Head from "next/head";

import Toolbar from '@mui/material/Toolbar';
import styles from "./styles/Favorites.module.css";
import Card from './components/home/card'
import Copyright2 from './components/copyright2'
export default function Home() {
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
            <Card />
          </span>

          <span >
          <Copyright2 />
        </span>
        </div>








    </>
  );
}

