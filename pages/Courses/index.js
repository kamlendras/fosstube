import Head from "next/head";
import NavBar from "/components/NavBar";
import CoursesSwiper from "/components/CoursesSwiper";
import Copyright2 from "/components/Copyright2";
import CoursesCardData from "/components/CoursesCardData";
import CopyrightIcon from '@mui/icons-material/Copyright';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
      <NavBar />
       <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            // height: '100vh',
            overflow: 'auto',
          }}
        >

          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
         <p>hello</p>
          </Container>
        </Box>


      
    

    {/* <div>
<CoursesSwiper/>
    </div> */}
{/*     
    <div>
<CoursesCardData/>
    </div> */}

    {/* <div>
<Copyright2/>
    </div> */}
    </>
  
  )
}

export default index
