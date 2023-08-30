import Head from "next/head";
import Sidebar from "/components/sidebar";
import Row from "/components/row";
import Widgets from "/components/widgets";
import styles from "/styles/Ask.module.css";
export default function Ask() {
  return (
    <div>
      <Head>
        <title>   
         Ask - CodNap
          </title>
        <meta
          name="description"
          content="codnap| codnap is the knowledge-sharing community Of Developers."
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