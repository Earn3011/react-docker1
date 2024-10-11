import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, CardActions } from '@mui/material';

export default function MyCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    height="140"
    image={props.attraction.coverimage}
    title={props.attraction.name}
    alt={props.attraction.name}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {props.attraction.name}
    </Typography>
    <Typography variant="body2" 
      sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
      {props.attraction.detail}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">xxx</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>

  );
}