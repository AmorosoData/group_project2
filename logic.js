// Fetch the JSON data and console log it
// // variables for each thing needed

// /**
//  * @param {array} rows
//  * @param {integer} index
//  */


// bring in data from data/n

var url = `data/coordinates_json.json`;

console.log(url);

function grabData(data) {

    d3.json(url).then(function(d) {
      var country_year = d.Country_Year;
      var arsenal = d.Quantity_of_Nuclear_Weapons;
      var gdp = d.GDP;
      var lat = d.Latitude;
      var long = d.Longitude;
      var country = d.Country;
      var year = d.Year;

      console.log(country_year);
      console.log(arsenal);
      console.log(gdp);
      console.log(lat);
      console.log(long);
      console.log(country);
      console.log(year);

  function renderCharts() {
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "Nuclear Arsenal vs GDP",
        x: arsenal,
        y: gdp,
        line: {
          color: "#17BECF"
        }
      };
  
      var data = [trace1];
  
      var layout = {
        // Need to instatiate input tag on html for user input on user_country_year
        title: "Arsenal vs GDP",
        xaxis: {
          range: [0, Math.max(arsenal)],
          type: "linear"
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };
  
      Plotly.newPlot("plot", data);
    }
    renderCharts();
  });
}
grabData();



// Scatterplot: arsenal vs gdp

// Heatmap: Density of Nukes by country
// Transitional: suicide rate vs arsenal, happiness vs arsenal