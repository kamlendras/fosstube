import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'AGPL-3.0 '} <br/>
        {new Date().getFullYear()}
        {'      '}
        <Link underline="none" color="inherit" href="https://fosstube.github.io/">
FossTube</Link>
      </Typography>
    );
  }
  export default Copyright