import Head from "next/head";
import NavBar from "/components/NavBar";
import CoursesSwiper from "/components/CoursesSwiper";
import Copyright2 from "/components/Copyright2";
import CoursesCardData from "/components/CoursesCardData";
import { Copyright } from "@material-ui/icons";

function index() {
  return (
    <>

<Head>
        <title>   
         Courses - CodNap
          </title>
        <meta
          name="description"
          content="Cod Nap| Cod Nap is the knowledge-sharing community Of Developers."
        />

     

      </Head>
    <div>
      <NavBar p={"fixed"}  />
    </div>

    <div>
<CoursesSwiper/>
    </div>
    
    <div>
<CoursesCardData/>
    </div>

    <div>
<Copyright2/>
    </div>
    
    
    
    </>
  )
}

export default index
