import React from "react";
import { Popup } from "react-leaflet";

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import GaugeChart from 'react-gauge-chart'

const MarkerPopup = (props) => {
  const { name, description, img, used, space} = props.data;
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
        <br></br>
        <Typography component="legend">Occupancy {used} / {space} </Typography>
        <br></br>
        <GaugeChart id="gauge-chart3" 
                            nrOfLevels={10} 
                            percent={used / space}
                            textColor="gray"
                            />
      </CardContent>
      <CardActions>
        <Button style={{width: "100%"}} variant="contained" onClick={() => props.setVenueView(props.data)}>See Forecast</Button>
      </CardActions>
    </Card>

    </Popup>
  );
};

export default MarkerPopup;
