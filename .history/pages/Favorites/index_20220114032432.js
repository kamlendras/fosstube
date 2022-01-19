import Head from "next/head";
import Nv from "/components/Nv";
import Footern from "/components/Footern";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'; 
import styles from "/styles/Favorites.module.css";
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
<span className={styles.FavoriteTwoToneIconinitial}>  <FavoriteRoundedIcon className={styles.parainitail}   />           </span>


    <div className={styles.end}>
<Footern/>
    </div>
    
    
    
    </>
  )
}

export default index