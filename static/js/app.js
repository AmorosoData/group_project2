
// will delete hardcode url below
// var url = `data/index_coordinates.json`;


var dropDown = d3.select("#selDataset");
var jsonData;


// will replace url with app route path
d3.json('/country').then(function (data) {
    jsonData = data;
    // var names = jsonData.names;
    var names = jsonData.Country_Year;


    names.map(d => {
        dropDown.append("option")
            .property('value', d)
            .text(d)
    });
    optionChanged(names[0]);

});

function optionChanged(newName) {
    // console.log(newName);
    metaData(newName)
}

function metaData(Country_Year) {
    console.log(`Selection: ${Country_Year}`)
    // var nukeCountryData = jsonData.data.filter(item => item.Country_Year == Country_Year)[0];
    var nukeCountryData = jsonData.filter(item => item.Country_Year == Country_Year)[0];
    var sampleMetadata = d3.select("#sample-metadata");
    // reset the html
    sampleMetadata.html("");


    for (const [key, value] of Object.entries(nukeCountryData)) {
        console.log(`${key}: ${value}`);
        sampleMetadata.append('p')
            .text(`${key}: ${value}`)

    }
}

// will replace countries with path to app route
// var countries = `data/index_coordinates.json`;
var countryData;
d3.json('/country').then(function (data) {
    // countryData = data.data;
    countryData = data;
    console.log(countryData);

    function circleSize(Quantity_of_Nuclear_Weapons) {
        return Math.sqrt(Quantity_of_Nuclear_Weapons) * 100;
    }
    // Create a map object
    var myMap = L.map("map", {
        center: [15.5994, -28.6731],
        zoom: 2
    });

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    }).addTo(myMap);

    yearMarkers = [];

    // Loop through the cities array and create one marker for each city object
    for (var i = 0; i < countryData.length; i++) {

        // Conditionals for countries points
        var color = "";
        if (countryData[i].Quantity_of_Nuclear_Weapons > 10000) {
            color = "red";
        }
        else if (countryData[i].Quantity_of_Nuclear_Weapons > 7500) {
            color = "orange";
        }
        else if (countryData[i].Quantity_of_Nuclear_Weapons > 5000) {
            color = "yellow";
        }
        else if (countryData[i].Quantity_of_Nuclear_Weapons > 1000) {
            color = "green";
        }
        else if (countryData[i].Quantity_of_Nuclear_Weapons > 500) {
            color = "purple";
        }
        else {
            color = "blue";
        }

        
        yearMarkers.push(L.circle([countryData[i].Latitude, countryData[i].Longitude], {
            stroke: true,
            fillOpacity: .06,
            // color: "white",
            fillColor: color,
            radius: circleSize(countryData[i].Quantity_of_Nuclear_Weapons) * 100
        }).bindPopup("<h1>" + countryData[i].Country_Year + "</h1> <hr> <h3>Quantity of Nuclear Weapons: " + countryData[i].Quantity_of_Nuclear_Weapons + "</h3>" + "</h1> <hr> <h4>GDP: " + countryData[i].GDP + "</h4>" + "</h1> <hr> <h4>Latitude: " + countryData[i].Latitude + "</h4>" + "</h1> <hr> <h4>Longitude: " + countryData[i].Longitude + "</h4>").addTo(myMap)
        );
    }
});


