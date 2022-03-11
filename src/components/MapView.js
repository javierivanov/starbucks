import React, { useState } from "react";
import { Map, TileLayer } from "react-leaflet";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state] = useState({
    currentLocation: { lat: 33.4176675795603, lng: -111.93195275666434 },
    zoom: 17,
    data,
  });
  
  

  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Starbucks
      </Typography>
    </Toolbar>

    <Map center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.venues} setVenueView={props.setVenueView} />
    </Map>
  </AppBar>


  );
};

export default MapView;
