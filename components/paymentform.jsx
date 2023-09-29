import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { blue } from '@mui/material/colors';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        You
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="e-mail"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>



        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveCard" value="yes" />}
            label="Send notifications on my email"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}