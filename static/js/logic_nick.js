// var customIcon = L.icon({
//   iconURL: './images/emoticon-outline.png',
//   iconSize: [38,95],
//   iconAnchor: [22,94],
//   popupAnchor: 
// })

d3.json('/happy').then(data => {
console.log(data);
  var myMap = L.map("nickMap", {
    center: [37.09, -95.91],
    zoom: 2
  });
  // add Tile Layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    }).addTo(myMap);


    data.forEach(feature => {
      L.marker([feature.Latitude, feature.Longitude])
      .bindPopup(`<h1>${feature.Country}</h1> <hr>Healthy Life Expectancy: ${feature.Healthy_life_expectancy } <hr>Freedom to make life choices: ${feature.Freedom_to_make_life_choices} <hr>Generosity: ${feature.Generosity} <hr>Perceptions of Corruption: ${feature.Perceptions_of_corruption }`).addTo(myMap);
    })
})