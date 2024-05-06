import Head from "next/head";
import Navbar from "/_components/navbar";
import Codecarddata from "/_components/codecarddata";
import styles from "/_styles/Code.module.css";
export default function index() {
  return (
   <>
      <Head>
      
        <meta
          name="description"
          content="codnap| codnap is the knowledge-sharing community Of Developers."
        />
     
     

      </Head>
   <div>
      <Navbar p={"fixed"}/>
    </div>
    <div className={styles.icodev}>
      <Codecarddata/>
    </div>
    </>
  )
}


