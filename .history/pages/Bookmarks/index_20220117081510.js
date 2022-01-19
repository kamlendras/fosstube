import Head from "next/head";
import Nv from "/components/Nv";
import Footern from "/components/Footern";
import styles from "/styles/Bookmarks.module.css";
import Image from "next/image";
function index() {
  return (
    <>

<Head>
        <title>   
         Bookmarks
          </title>
        <meta
          name="description"
          content="Arrow Nap| Arrow Nap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="favicon.ico" />
     

      </Head>
    <div>
      <Nv p={"fixed"}  />
    </div>

    <span className={styles.book}>
        <Image src="/bookmark.svg" height={512} width={512} alt="heart"></Image>
      </span>

      <p className={styles.heartt}>Your Favorites will appear here.</p>

    <span className={styles.Footern}>
          <Footern />
        </span>
    
    
    
    </>
  )
}

export default index