export default [
  {
    elementType: "geometry",
    stylers: [{ color: "#f5f3ef" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#6e6e6e" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "water",
    stylers: [{ color: "#d3e2e8" }],
  },
  {
    featureType: "road",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { color: "#cfe1d3" }],
  },
];