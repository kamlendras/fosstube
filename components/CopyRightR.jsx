import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'©  '}
        {new Date().getFullYear()}
        {'      '}
        <Link underline="none" color="inherit" href="https://code.press/">
          CODE PRESS
        </Link>{' '}
      </Typography>
    );
  }
  export default Copyright