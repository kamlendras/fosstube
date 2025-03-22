import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
      &copy; 
        {new Date().getFullYear()}
        {'      '} 
        <Link underline="none" color="inherit" href="https://fosstube.github.io/">
        Google LLC</Link>
      </Typography>
    );
  }
  export default Copyright