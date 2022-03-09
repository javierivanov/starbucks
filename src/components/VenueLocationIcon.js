import L from "leaflet";

export const VenueLocationIcon = L.icon({
  iconUrl: require("../assets/venue_location_icon.svg"),
  iconRetinaUrl: require("../assets/venue_location_icon.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: 10,
  shadowAnchor: null,
  iconSize: [70, 70],
  className: "leaflet-venue-icon",
});
