import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function ImgMediaCard(props) {
  return (
    <span >
 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        width="345"
        image={props.i}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.t}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.tt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    

    </span>
  );
}