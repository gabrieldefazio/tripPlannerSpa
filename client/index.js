const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoibWlzc2FuaWNoa2EiLCJhIjoiY2o4YnNpODV1MDFhczJ3cG0wNWRpcmtpdyJ9.vdrU_rE5GS8Gh5mMdH1MhQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


fetch("/api")
.then(res => {
  console.log('res', res)
  return res.json()
})
.then(body => {
  const hotels = body[0];
  const activities = body[1];
  const restaurants = body[2];

  hotels.forEach(hotel => {
    let name = hotel.name;
    let option = new Option(name, hotel)
    document.getElementById('hotels-choices').add(option)
  })
  activities.forEach(activity => {
    let name = activity.name;
    let option = new Option(name, activity)
    document.getElementById('activities-choices').add(option)
  })
  restaurants.forEach(restaurant => {
    let name = restaurant.name;
    let option = new Option(name, restaurants)
    document.getElementById('restaurants-choices').add(option)
  })
})



const marker = buildMarker("activities", [-74.009, 40.705]);
marker.addTo(map);
