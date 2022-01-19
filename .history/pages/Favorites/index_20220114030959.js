import Head from "next/head";
import Nv from "/components/Nv";
import Footern from "/components/Footern";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

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
<span className={styles.FavoriteTwoToneIcon}>             </span>


    <div>
<Footern/>
    </div>
    
    
    
    </>
  )
}

export default index