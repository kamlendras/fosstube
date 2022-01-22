import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Co(props) {
  return (
    <Card sx={{ maxWidth: 300 , maxHight:50}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.i}
          alt="NO internet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.t}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.d}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Start
        </Button>
      </CardActions>
    </Card>
  );
}