

var url = `data/index_coordinates.json`;


var dropDown = d3.select("#selDataset");
var jsonData;
var mapData;


d3.json(url).then(function (data) {
    jsonData = data;
    var names = jsonData.names;


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
    var nukeCountryData = jsonData.data.filter(item => item.Country_Year == Country_Year)[0];
    var sampleMetadata = d3.select("#sample-metadata");
    // reset the html
    sampleMetadata.html("");


    for (const [key, value] of Object.entries(nukeCountryData)) {
        console.log(`${key}: ${value}`);
        sampleMetadata.append('p')
            .text(`${key}: ${value}`)

    }
}


var countries = `data/index_coordinates.json`;
var countryData;
d3.json(countries).then(function (data) {
    countryData = data.data;
    console.log(countryData);

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

    // Loop through the cities array and create one marker for each city object
    for (var i = 0; i < countryData.length; i++) {

        // Conditionals for countries points
        var color = "";
        if (countryData[i].Quantity_of_Nuclear_Weapons > 200) {
            color = "yellow";
        }
        else if (countryData[i].Quantity_of_Nuclear_Weapons > 100) {
            color = "blue";
        }
        else if (countryData[i].Quantity_of_Nuclear_Weapons > 90) {
            color = "green";
        }
        else {
            color = "red";
        }

        // Add circles to map
        L.circle([countryData[i].Latitude, countryData[i].Longitude], {
            fillOpacity: 0.75,
            color: "white",
            fillColor: color,
            // Adjust radius
            radius: countryData[i].Quantity_of_Nuclear_Weapons * 50
        }).bindPopup("<h1>" + countryData[i].Country_Year + "</h1> <hr> <h3>Points: " + countryData[i].Quantity_of_Nuclear_Weapons + "</h3>").addTo(myMap);
    }
});






    // // Add circles to map
    // L.circle([jsonData[i].Latitude, jsonData[i].Longitude], {
    //     fillOpacity: 0.75,
    //     color: "white",
    //     fillColor: color,
    //     // Adjust radius
    //     radius: jsonData[i].Quantity_of_Nuclear_Weapons + 1000000
    // }).bindPopup("<h1>" + jsonData[i].Country_Year + "</h1> <hr> <h3> Quantity of Nuclear Weapons: " + jsonData[i].Quantity_of_Nuclear_Weapons + "</h3>").addTo(myMap);
    // // console.log(bellyButtonData);







    // // var countrySelection = jsonData.data.filter(item => item.Country_Year == Country_Year)[0];

    // var heatArray = [];

    // for (var i = 0; i < jsonData.length; i++) {
    //     var quantity = jsonData.Quantity_of_Nuclear_Weapons;

    //     if (quantity) {
    //         heatArray.push();
    //     }
    // }

    // var heat = L.heatLayer(heatArray, {
    //     radius: 10000,
    //     blur: 35
    // }).addTo(myMap);

