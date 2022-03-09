import React from "react";
import { Popup } from "react-leaflet";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



const MarkerPopup = (props) => {
  const { name, description, img } = props.data;
  return (
    <Popup>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography component="legend">Occupancy</Typography>
      <Rating name="read-only" value={2} readOnly />
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => props.setVenueView(name)}>Bookings</Button>
      </CardActions>
    </Card>

    </Popup>
  );
};

export default MarkerPopup;
