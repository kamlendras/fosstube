import Head from "next/head";
import Nv from "/components/Nv";
import Swiper from "/components/Swiper";
import Footern from "/components/Footern";


function index() {
  return (
    <>

<Head>
        <title>   
         Bookmarks
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

 

    <div>
<Footern/>
    </div>
    
    
    
    </>
  )
}

export default index