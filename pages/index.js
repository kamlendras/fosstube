import Head from "next/head";
import NavBar from "../components/NavBar";
import Toolbar from '@mui/material/Toolbar';
import Card from '/components/home/card'
import Copyright2 from '/components/Copyright2'
export default function Home() {
  return (
    <>
      <Head>
        <title>CODE PRESS</title>
        <meta
          name="description"
          content="CODE THE WORLD"
        />
        <link rel="icon" href="/codnapwhite.svg" />
      </Head>

      <div className="page">
      <NavBar />

   
      <div className="medium">
      <Toolbar />
      <div>
<Card/>
    </div>
   

    <div>
<Copyright2/>
    </div></div>
   </div>

      
    

      




   </> 
  );
}

