import Head from "next/head";
import Sidebar from "/components/Sidebar";
import Row from "/components/Row";
import Widgets from "/components/Widgets";
import styles from "/styles/Ask.module.css";
export default function Ask() {
  return (
    <div>
      <Head>
        <title>   
         Ask - Arrow Nap
          </title>
        <meta
          name="description"
          content="Arrow Nap| Arrow Nap is the knowledge-sharing community Of Developers."
        />
     

      </Head>
       <div className={styles.void}>
      <Sidebar />
      <Row />
      <Widgets />
    </div>
    </div>
  )
}