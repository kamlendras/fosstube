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
     <FavoriteTwoToneIcon/>

      </Head>
    <div>
      <Nv p={"fixed"}  />
    </div>



    <div>
<Footern/>
    </div>
    
    
    
    </>
  )
}

export default index