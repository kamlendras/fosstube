import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
   Code
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="<HTML/>"
          font-size="1px"
          multiline
          fullWidth
          rows={4}
          defaultValue="<html>
          <head>
              <title>Arrow Nap</title>
          </head>
          <body>
              
          </body>
          </html>



          "

        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label=".CSS"
          multiline
          fullWidth
          rows={4}
          defaultValue="body {
            background-color: blue;
          }"
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="JS"
          multiline
          fullWidth
          rows={4}
          defaultValue="//JavaScript"
        />
        </Grid>
     



     
      </Grid>
    </React.Fragment>
  );
}


