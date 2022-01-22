import Head from "next/head";
import Nv from "/components/Nv";
import Footern from "/components/Footern";
import styles from "/styles/Favorites.module.css";
function index() {
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta
          name="description"
          content="Arrow Nap| Arrow Nap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Nv p={"fixed"} />
      </div>

      <span className={styles.heart}>
        <img src="/heart.svg" height={512} width={512} alt="heart"></img>
      </span>

      <p className={styles.heartt}>Your Favorites will appear here.</p>
     
        <span className={styles.Footern}>
          <Footern />
        </span>
   
    </>
  );
}

export default index;
