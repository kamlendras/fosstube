import Toolbar from '@mui/material/Toolbar';
import Qa from "../components/accordion";
import Footer from "../components/footer";
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
export const metadata = {
  title: "Help - FossTube",
  description: "Open & Decentralized",
};
export default function Home() {
  return (
    <>
    
  <Toolbar/>
    <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', m: 1 }}>
        Help <HelpIcon/>
      </Typography> 
      <Qa />
      <Footer />
    </>
  );
}
