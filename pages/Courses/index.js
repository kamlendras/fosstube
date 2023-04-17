import Head from "next/head";
import NavBar from "/components/NavBar";
import Swiper from "/components/courses/swiper";
import Copyright2 from "/components/Copyright2";
import CardGrid from "/components/courses/cardgrid";
import Toolbar from '@mui/material/Toolbar';
function index() {
  return (
    
    <>

<Head>
        <title>   
         Courses - Code Press
          </title>
        <meta
          name="description"
          content="Code Press | Code Press is the knowledge-sharing community Of Developers."
        />

     

      </Head>
    <div className="page">
      <NavBar />

   
      <div className="medium">
      <Toolbar />
      <div>
<Swiper/>
    </div>
    <div>
<CardGrid/>
    </div> *

    <div>
<Copyright2/>
    </div></div>
   </div>

      
    

 
    </>
  
  )
}

export default index
