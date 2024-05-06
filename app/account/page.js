import Avatar from '@mui/material/Avatar';
import Copyright2 from "../_components/copyright2";
import styles from "../_styles/Bookmarks.module.css";
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';
export const metadata = {
  title: "Account - FossTube",
  description: "Open & Decentralized",
};
function settings() {
  return (
    <>
      <Grid container spacing={2} sx={{mt : 10}}  >
       
        <Grid xs={12} sm={12}>
          <Typography variant="h6" gutterBottom>
            Account
          </Typography>
        </Grid>
        <Grid xs={12} sm={12}>
          <Typography variant="h5" gutterBottom>
            Choose how you appear and what you see on FossTube
          </Typography>
        </Grid>
        <Grid xs={12} sm={8}>
          <Typography variant="caption" display="block" gutterBottom>
            Signed in as kamlendrax@gmail.com
          </Typography>
        </Grid>
        <Divider style={{width:'100%'}} sx={{m : 2}} />
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Your FossTube channel
          </Typography>
        </Grid>
        <Grid xs={12} sm={12}>
          <Typography variant="caption" display="block" gutterBottom>
            This is your public presence on FossTube. You need a channel to upload your own videos, comment on videos, or create playlists.
          </Typography>
        </Grid>
        <Grid xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>
            Your channel
          </Typography>
        </Grid>
        <Grid xs={12} sm={10}>
          <Grid xs={12} sm={12}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid xs={12} sm={12}>
            <Link href="#" underline="none">
              {'Channel status and features'}
            </Link>
          </Grid>
          <Grid xs={12} sm={12}>
            <Link href="#" underline="none">
              {'Add or manage your channel(s)'}
            </Link>
          </Grid>
          <Grid xs={12} sm={12}>
            <Link href="#" underline="none">
              {'View advanced settings'}
            </Link>
          </Grid>
        </Grid>

        <Divider style={{width:'100%'}} sx={{m : 2}}/>
        <Grid xs={12} sm={12}>
          <Typography variant="h4" gutterBottom>
            Your Account
          </Typography>
        </Grid>
        <Grid xs={12} sm={12}>
          <Typography variant="caption" display="block" gutterBottom>
            You sign in to FossTube with your Foss Account
          </Typography>
        </Grid>
        <Grid xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>
            Foss Account
          </Typography>
          </Grid>
          <Grid xs={10}>
          <Grid xs={12}>
            <Link href="#" underline="none">
              {'View or change your Foss Account settings'}
            </Link>
          </Grid>
          <Grid xs={12} sm={12}>
            <Typography variant="subtitle2" gutterBottom>
              You will be redirected to your Foss Account page

            </Typography>
          </Grid>




          </Grid>
        
          <Grid xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Donate
            </Typography>
          </Grid>
          <Grid xs={12} sm={10}>
          <Grid xs={12} sm={12}>
            <Link href="#" underline="none">
              {'Go Donate'}
            </Link>
          </Grid>
          <Grid xs={12} sm={12}>
            <Typography variant="subtitle2" gutterBottom>
              Help us stay forever
            </Typography>
          
        </Grid>

          </Grid>
          
      </Grid>
























      {/* <div className={styles.Container}>
        <div className={styles.Content}>
          <div className={styles.CTA}></div>
          <span className={styles.bookmark}>
            
            <ConstructionOutlinedIcon sx={{ color: 'text.primary', fontSize: 312, fontWeight: 'medium' }} />
          </span>

    
          <Typography variant="h6" gutterBottom>
          This Page is in Construction.
      </Typography>
  

          <span className={styles.Footern}>
            <Copyright2 />
          </span>
        </div>
      </div> */}
    </>
  );
}

export default settings;