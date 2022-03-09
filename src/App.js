import React from "react";
import "./App.css";

import MapView from "./components/MapView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Map"
    };
    this.setVenueView = this.setVenueView.bind(this)
  }

  setVenueView(venue) {
    this.setState({
      view: "Venue",
      venue: venue
    });
  }

  render() {
    switch(this.state.view) {
      case "Map": return <MapView setVenueView={this.setVenueView} />;
      case "Venue": return <div>{this.state.venue}</div>;
      default: return <div></div>;
    }
  }
}

export default App;
