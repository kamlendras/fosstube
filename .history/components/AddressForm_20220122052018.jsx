import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Project
      </Typography>
      <Grid container spacing={3}>
        
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Project Name"
            // fullWidth
           
            autoComplete="shipping address-line1"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          fullWidth
          rows={4}
          defaultValue="Write something about your project."
        />
        </Grid>





        
  
      </Grid>
    </React.Fragment>
  );
}