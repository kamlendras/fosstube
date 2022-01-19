import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
function Copyright(props) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
	   <Link color="inherit" href="https://arrownap.com/">
		  arrownap
		</Link   >{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }