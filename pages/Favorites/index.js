import Head from "next/head";
import NavBar from "/components/NavBar";
import Copyright2 from "/components/Copyright2";
import styles from "/styles/Favorites.module.css";
function index() {
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta
          name="description"
          content="CODE| CODE is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <NavBar p={"fixed"} />
      </div>

      <span className={styles.heart}>
        <img src="/heart.svg" height={512} width={512} alt="heart"></img>
      </span>

      <p className={styles.heartt}>Your Favorites will appear here.</p>
     
        <span className={styles.Footern}>
          <Copyright2 />
        </span>
   
    </>
  );
}

export default index;
