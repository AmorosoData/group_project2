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

  d3.json(url).then(function (d) {
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

    // function renderCharts() {
    //     var trace1 = {
    //       type: "scatter",
    //       mode: "lines",
    //       name: "Nuclear Arsenal vs GDP",
    //       x: year,
    //       // y: arsenal,
    //       line: {
    //         color: "#17BECF"
    //       }
    //     };

    //     var data = [trace1];

    //     // var layout = {
    //     //   // Need to instatiate input tag on html for user input on user_country_year
    //     //   title: "Arsenal vs GDP",
    //     //   xaxis: {
    //     //     range: [Math.min(country_year), Math.max(country_year)],
    //     //     autorange: false,
    //     //     type: "linear"
    //     //   },
    //     //   // yaxis: {
    //     //   //   range: [Math.min(arsenal), Math.max(arsenal)],
    //     //   //   autorange: false,
    //     //   //   type: "linear"
    //     //   // }
    //     // };

    //     Plotly.newPlot("plot", data);
    //   }
    //   renderCharts();

  });
}

grabData();

// // Building SVG
// var svgWidth = 960;
// var svgHeight = 500;

// var margin = {
//   top: 20,
//   right: 40,
//   bottom: 80,
//   left: 100
// };

// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// // Create an SVG wrapper, append an SVG group that will hold our chart,
// // and shift the latter by left and top margins.
// var svg = d3
//   .select(".chart")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// // Append an SVG group
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);

// //  Initial Params
// var chosenXAxis = "Year";

// // function used for updating x-scale var upon click on axis label
// function xScale(NukeData, chosenXAxis) {
//   // create scales
//   var xLinearScale = d3.scaleLinear()
//     .domain([d3.min(NukeData, d => d[chosenXAxis]) * 0.8,
//     d3.max(NukeData, d => d[chosenXAxis]) * 1.2
//     ])
//     .range([0, width]);

//   return xLinearScale;

// }

// // function used for updating circles group with a transition to
// // new circles
// function renderCircles(circlesGroup, newXScale, chosenXAxis) {

//   circlesGroup.transition()
//     .duration(1000)
//     .attr("cx", d => newXScale(d[chosenXAxis]));

//   return circlesGroup;
// }

// // function used for updating circles group with new tooltip
// function updateToolTip(chosenXAxis, circlesGroup) {

//   var label;

//   if (chosenXAxis === "Year") {
//     label = "Year:";
//   }
//   else {
//     label = "RETURN TO THIS";
//   }

//   var toolTip = d3.tip()
//     .attr("class", "tooltip")
//     .offset([80, -60])
//     .html(d => `${d.country_year}<br>${label} ${d[chosenXAxis]}`);

//   circlesGroup.call(toolTip);

//   circlesGroup.on("mouseover", function (data) {
//     toolTip.show(data);
//   })
//     // onmouseout event
//     .on("mouseout", function (data) {
//       toolTip.hide(data);
//     });

//   return circlesGroup;
// }

// // Retrieve data from the CSV file and execute everything below
// d3.csv("nuke_coordinates.csv").then(NukeData => {

//   // parse data
//   NukeData.forEach(data => {
//     data["Quantity of Nuclear Weapons"] = +data["Quantity of Nuclear Weapons"];
//     data.Year = +data.Year;
//     data["GDP (Current LCU)"] = +data["GDP (Current LCU)"];
//     data.Latitude = +data.Latitude;
//     data.Longitude = +data.Longitude;
//   });

//   // xLinearScale function above csv import
//   var xLinearScale = xScale(NukeData, chosenXAxis);

//   // Create y scale function
//   var yLinearScale = d3.scaleLinear()
//     .domain([0, d3.max(NukeData, d => d.Year)])
//     .range([height, 0]);

//   // Create initial axis functions
//   var bottomAxis = d3.axisBottom(xLinearScale);
//   var leftAxis = d3.axisLeft(yLinearScale);

//   // append x axis
//   var xAxis = chartGroup.append("g")
//     .classed("x-axis", true)
//     .attr("transform", `translate(0, ${height})`)
//     .call(bottomAxis);
  
//   // append y axis
//   chartGroup.append("g")
//     .call(leftAxis);

//     // append initial circles
//   var circlesGroup = chartGroup.selectAll("circle")
//   .data(NukeData)
//   .join("circle")
//   .attr("cx", d => xLinearScale(d[chosenXAxis]))
//   .attr("cy", d => yLinearScale(d["Quantity of Nuclear Weapons"]))
//   .attr("r", 20)
//   .attr("fill", "pink")
//   .attr("opacity", 0.5)
//   .attr("stroke", "black");

//   // Create group for two x-axis labels
//   var labelsGroup = chartGroup.append("g")
//     .attr("transform", `translate(${width / 2}, ${height + 20})`);

//   var YearLengthLabel = labelsGroup.append("text")
//     .attr("x", 0)
//     .attr("y", 20)
//     .attr("value", "Year") // value to grab for event listener
//     .classed("active", true)
//     .text("Hair Metal Ban Hair Length (inches)");
  
  
  
  










// Scatterplot: arsenal vs gdp

// Heatmap: Density of Nukes by country
// Transitional: suicide rate vs arsenal, happiness vs arsenal