let map;
let mydata;
var arr = [{
  "latitude": 42.349525,
  "longitude": -71.094642,
  "download": 83721
},
{
  "latitude": 42.34919,
  "longitude": -71.098364,
  "download": 72084
},
{
  "latitude": 42.349303,
  "longitude": -71.106637,
  "download": 142460
},
{
  "latitude": 42.349544,
  "longitude": -71.094622,
  "download": 105393
},
{
  "latitude": 42.350028,
  "longitude": -71.098048,
  "download": 45227
},
{
  "latitude": 42.349923,
  "longitude": -71.099372,
  "download": 113520
},
{
  "latitude": 42.349114,
  "longitude": -71.095275,
  "download": 72323
},
{
  "latitude": 42.349507,
  "longitude": -71.094584,
  "download": 104756
},
{
  "latitude": 42.348113,
  "longitude": -71.106409,
  "download": 53294
},
{
  "latitude": 42.349007,
  "longitude": -71.096116,
  "download": 43259
},
{
  "latitude": 42.349664,
  "longitude": -71.094757,
  "download": 29442
},
{
  "latitude": 42.349511,
  "longitude": -71.094623,
  "download": 91833
}]

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: arr[0].latitude, lng: arr[0].longitude },
    mapTypeId: "terrain",
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
//   // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//   script.src =
//     "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
//   document.getElementsByTagName("head")[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function(results) {

  for (let i = 0; i < arr.length; i++) {
    const latLng = new google.maps.LatLng(arr[i].latitude, arr[i].longitude);
    // latLng = google.maps.LatLng(mydata[i].latitude, mydata[i].longitude);

    new google.maps.Marker({
      position: latLng,
      label: "speed = " + arr[i].download,
      map: map,
    });
  }
};
