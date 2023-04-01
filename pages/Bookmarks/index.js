import Head from "next/head";
import NavBar from "/components/NavBar";
import Copyright2 from "/components/Copyright2";
import styles from "/styles/Bookmarks.module.css";
function index() {
  return (
    <>

<Head>
        <title>   
         Bookmarks
          </title>
        <meta
          name="description"
          content="CODE| CODE is the knowledge-sharing community Of Developers."
        />
     
     

      </Head>
    <div>
      <NavBar p={"fixed"}  />
    </div>
<div className={styles.Container}>
  <div className={styles.Content}>
    <div className={styles.CTA}></div>
    <span className={styles.bookmark}>
        <img src="/bookmark.svg" height={312} width={312} alt="heart"></img>
      </span>

      <p className={styles.text}>Your Bookmarks will appear here.</p>

    <span className={styles.Footern}>
          <Copyright2 />
        </span>
        </div>
        </div>
    
    </>
  )
}

export default index