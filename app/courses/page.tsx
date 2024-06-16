import Swiper from "../_components/courses/swiper";
import Copyright2 from "../_components/copyright2";
import Cardgrid from "../_components/courses/cardgrid";
import Toolbar from '@mui/material/Toolbar';
export const metadata = {
  title: "Courses - FossTube",
  description: "Open & Decentralized",
};
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
