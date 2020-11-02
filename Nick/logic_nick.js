

d3.json('data/happy_json.json').then(data => {

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


    result.forEach(feature => {
      L.marker([feature.Latitude, feature.Longitude])
        .bindPopup("<h1>" + feature.Country +
        "</h3><hr><p>" + feature.Healthy_life_expectancy + "</p>" +
        "</h3><hr><p>" + feature.Freedom_to_make_life_choices + "</p>" +
        "</h3><hr><p>" + feature.Generosity + "</p>" +
        "</h3><hr><p>" + feature.Perceptions_of_corruption + "</p>")
        .addTo(myMap);

      ;
    })
})
