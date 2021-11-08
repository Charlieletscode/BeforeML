let map;

var arr = [{lat: 42.349525, long: -71.094642, speed: 83721}]

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: arr[0].lat, lng: arr[0].long },
    mapTypeId: "terrain",
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);

}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function(results) {

  

  for (let i = 0; i < arr.length; i++) {

    const latLng = new google.maps.LatLng(arr[i].lat, arr[i].long);

    new google.maps.Marker({
      position: latLng,
      label: "speed = " + arr[i].speed,
      map: map,
    });
  }
};
