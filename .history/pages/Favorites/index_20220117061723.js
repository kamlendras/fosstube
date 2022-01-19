import Head from "next/head";
import Nv from "/components/Nv";
import Footern from "/components/Footern"; 
import styles from "/styles/Favorites.module.css";
import Image from 'next/image'
function index() {
  return (
    <>

<Head>
        <title>   
         Favorites
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

<span>
<Image src="/heart.svg" height={512} width={512} alt="heart"></Image>


    <div className={styles.end}>
<Footern/>
    </div>
    
    
    
    </>
  )
}

export default index