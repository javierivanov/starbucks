import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";

import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 33.4176675795603, lng: -111.93195275666434 },
    zoom: 17,
    data,
  });
  
  

  return (
    <Map center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.venues} setVenueView={props.setVenueView} />
    </Map>
  );
};

export default MapView;
