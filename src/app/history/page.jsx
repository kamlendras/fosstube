"use client"
import Head from "next/head";

import Copyright2 from "../components/copyright2";
import styles from "../styles/Favorites.module.css";
import React from "react";
import Lottie from "lottie-react";
import history from "./history.json";
import { HistoryEdu } from "@mui/icons-material";
const style = {
    height: 512,
  };
function favorites() {
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta
          name="description"
          content="codnap|codnap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
   

      <span className={styles.heart}>
        {/* <img src="/heart.svg" height={512} width={512} alt="heart"></img> */}
        <Lottie animationData={history} loop={true}
       style={style} />
      </span>

      {/* <p className={styles.heartt}>Your Favorites will appear here.</p> */}
     
        <span className={styles.Footern}>
          <Copyright2 />
        </span>
   
    </>
  );
}

export default favorites;