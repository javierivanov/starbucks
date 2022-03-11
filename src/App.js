import React from "react";
import "./App.css";

import MapView from "./components/MapView";
import Booking from "./components/Booking";
import BookingVenue from "./components/BookingVenue";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import data from "./assets/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Map"
    };
    this.setVenueView = this.setVenueView.bind(this)
    this.setMapView = this.setMapView.bind(this)
    this.setBookingView = this.setBookingView.bind(this)
  }

  setVenueView(venue) {
    this.setState({
      view: "Venue",
      venue: venue
    });
  }

  setMapView() {
    this.setState({
      view: "Map"
    })
  }

  setBookingView() {
    this.setState({
      view: "Booking"
    })
  }


  render() {
    switch(this.state.view) {
      case "Map": return <Box sx={{ flexGrow: 1 }}><MapView setVenueView={this.setVenueView} /></Box>;
      case "Venue": return <Box sx={{ flexGrow: 1 }}><Booking setMapView={this.setMapView} setBookingView={this.setBookingView} data={this.state.venue} /></Box>;
      case "Booking": return <Box sx={{ flexGrow: 1 }}><BookingVenue setVenueView={this.setVenueView} data={this.state.venue} /></Box>;
      default: return <div></div>;
    }

  }
}

export default App;
