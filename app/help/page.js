import Toolbar from '@mui/material/Toolbar';
import Qa from "../_components/accordion";
import Footer from "../_components/footer";
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export const metadata = {
  title: "Help - FossTube",
  description: "Open & Decentralized",
};
export default function Home() {
  return (
    <>
    
  <Toolbar/>
  <Grid  sx={{mt : 2}}  >
    <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', m: 1 }}>
        Help <HelpIcon/>
      </Typography> 
      </Grid>
      <Grid container spacing={2} sx={{m : 5}}  >

      <Qa />
      </Grid>
      <Footer />
    </>
  );
}
