import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright(props) {
  return (
    
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'AGPL-3.0 LICENSED  '}
      <Link color="inherit" href="/">
      FossTube
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footern() {


  return (
   
 <Copyright  />
  // sx={{ mt: 8, mb: 4 }}

  );
}