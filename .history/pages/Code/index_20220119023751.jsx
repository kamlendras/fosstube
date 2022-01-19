import Head from "next/head";
import Nv from "/components/Nv";
import Icode from "/components/Icode";

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
    <div className={styles.icode}>
      <Icode/>
    </div>
    </>
  )
}


