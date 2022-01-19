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
<div className={styles.Container}>
  <div className={styles.Content}>
    <div className={styles.CTA}></div>
    <span className={styles.bookmark}>
        <Image src="/bookmark.svg" height={312} width={412} alt="heart"></Image>
      </span>

      <p className={styles.heartt}>Your Bookmarks will appear here.</p>

    <span className={styles.Footern}>
          <Footern />
        </span>
        </div>
        </div>
    
    </>
  )
}

export default index