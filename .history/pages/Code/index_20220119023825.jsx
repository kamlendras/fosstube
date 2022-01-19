import Head from "next/head";
import Nv from "/components/Nv";
import Icode from "/components/Icode";
import styles from "../styles/Code.module.css";
export default function index() {
  return (
   <>
      <Head>
        <title>   
         Code - Arrow Nap
          </title>
        <meta
          name="description"
          content="Arrow Nap| Arrow Nap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="favicon.ico" />
     

      </Head>
   <div>
      <Nv p={"fixed"}/>
    </div>
    <div className={styles.icodev}>
      <Icode/>
    </div>
    </>
  )
}


