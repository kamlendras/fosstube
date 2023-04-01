import Head from "next/head";
import NavBar from "/components/NavBar";
import CodeCardData from "/components/CodeCardData";
import styles from "/styles/Code.module.css";
export default function index() {
  return (
   <>
      <Head>
      
        <meta
          name="description"
          content="Cod Nap| Cod Nap is the knowledge-sharing community Of Developers."
        />
     
     

      </Head>
   <div>
      <NavBar p={"fixed"}/>
    </div>
    <div className={styles.icodev}>
      <CodeCardData/>
    </div>
    </>
  )
}


