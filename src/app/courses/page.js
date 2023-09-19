import Head from "next/head";
import Swiper from "../components/courses/swiper";
import Copyright2 from "../components/copyright2";
import Cardgrid from "../components/courses/cardgrid";
import Toolbar from '@mui/material/Toolbar';
function courses() {
  return (
    
    <>
    <span >
     

   
      <span >
      <Toolbar />
      <span>
<Swiper/>
    </span>
    <span>
<Cardgrid/>
    </span> *

    <span>
<Copyright2/>
    </span></span>
   </span>

      
    

 
    </>
  
  )
}

export default courses
