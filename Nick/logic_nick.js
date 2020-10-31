// Store our API endpoint inside happyUrl
var happyUrl = '../data/happy_json.json';
// Perform a GET request to the query URL
d3.json(happyUrl).then(data => {
  console.log(data);
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(happyData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.Country +
      "</h3><hr><p>" + new Date(feature.Healthy_life_expectancy) + "</p>" +
      "</h3><hr><p>" + new Date(feature.Freedom_to_make_life_choices) + "</p>" +
      "</h3><hr><p>" + new Date(feature.Generosity) + "</p>" +
      "</h3><hr><p>" + new Date(feature.Perceptions_of_corruption) + "</p>")
      ;
  }

  // Create a GeoJSON layer containing the features array on the happyData object
  // Run the onEachFeature function once for each piece of data in the array
  var happieness = L.geoJSON(happyData, {
    onEachFeature: onEachFeature,
  });

  var mags = L.geoJSON(happyData, {
    onEachFeature: onEachFeature,
    pointToLayer: (feature, latlng) => {
      return new L.Circle(latlng, {
        radius: feature.properties.mag*10000,
        fillColor: "red",
        stroke: false 
      });
    }
  });

  // Sending our happieness layer to the createMap function
  createMap(happieness, mags);
}

function createMap(happieness, mags) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

//   // Create overlay object to hold our overlay layer
//   var overlayMaps = {
//     Earthquakes: happieness,
//     Magnitudes: mags
//   };

  // Create our map, giving it the streetmap and happieness layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [streetmap, happieness]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, {
    collapsed: false
  }).addTo(myMap);
}
