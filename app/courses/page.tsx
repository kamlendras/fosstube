import Swiper from "../components/courses/swiper";
import Copyright from "../components/copyright";
import Cardgrid from "../components/courses/cardgrid";
import Toolbar from '@mui/material/Toolbar';
export const metadata = {
  title: "Courses - YouTube",
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
<Copyright/>
    </span></span>
   </span>

      
    

 
    </>
  
  )
}

export default courses
