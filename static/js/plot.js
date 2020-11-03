// @TODO: YOUR CODE HERE!
// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 960;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data from assets/data/data.csv
d3.json("/gdp").then(data => {

  // Print the data
  console.log(data);

  // Cast the poverty and GDP values to numbers
  data.forEach(data => {
    data.Nukes = +data.Nukes;
    data.gdp_dollar = +data.gdp_dollar;

    data.Country = data.Country 
    console.log(data.Country)

    data.color = data.color
    console.log(data.color)


    console.log(data.Nukes);
    console.log(data.gdp_dollar);
  });

  // d3.extent returns the an array containing the min and max values for the property specified
  var xLinearScale = d3.scaleLinear()
    .domain(d3.extent(data, data => +data.Nukes))
    .range([0, chartWidth]);

  // Configure a linear scale with a range between the chartHeight and 0
  var yLinearScale = d3.scaleLinear()
    .domain(d3.extent(data, data => +data.gdp_dollar))
    .range([chartHeight, 0]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Add dots--Credit to d3 documentation writers at https://www.d3-graph-gallery.com/graph/scatter_basic.html
  svg.append('g')
  .selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", function (d) { return xLinearScale(d.Nukes) + margin.left; } )
  .attr("cy", function (d) { return yLinearScale(d.gdp_dollar) + margin.top; } )
  .attr("r", 10)
  .attr("fill-opacity", 0.6)
  // .style("fill", "#69b3a2")
  .style("fill", function (d) { return d.color;})

  // Append an SVG group element to the chartGroup, create the left axis inside of it
  chartGroup.append("g")
    .classed("axis", true)
    .call(leftAxis);

  // Append an SVG group element to the chartGroup, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);

  
  // Append y-axis label                 
  chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (chartHeight / 2))
    .attr("dy", "1em")
    .classed("axis-text", true)
    .text("GDP");               

  // Append x-axis label                 
  chartGroup.append("text")
    .attr("transform","rotate(0)")
    .attr("y", 0 + (chartHeight + margin.bottom / 2))
    .attr("x", 0 + (chartWidth / 2))
    .attr("dx", "1em")
    .classed("axis-text", true)
    .text("Number of Nukes");


  // Append Years  
    chartGroup.append("g").selectAll("text")
    .data(data)
    .join("text")
    .text(d => d.Year)
    .attr("x", d => xLinearScale(d.Nukes))
    .attr("y", d => yLinearScale(d.gdp_dollar))
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "central")
    .attr("font-size", "10px");

    // Handmade legend
    svg.append("circle").attr("cx",700).attr("cy",130).attr("r", 6).style("fill", "teal").attr("fill_opacity", 0.6)
    svg.append("circle").attr("cx",700).attr("cy",160).attr("r", 6).style("fill", "green").attr("fill_opacity", 0.6)
    svg.append("circle").attr("cx",700).attr("cy",190).attr("r", 6).style("fill", "goldenrod").attr("fill_opacity", 0.6)
    svg.append("circle").attr("cx",700).attr("cy",220).attr("r", 6).style("fill", "indigo").attr("fill_opacity", 0.6)
    svg.append("circle").attr("cx",700).attr("cy",250).attr("r", 6).style("fill", "orange").attr("fill_opacity", 0.6)
    svg.append("circle").attr("cx",700).attr("cy",280).attr("r", 6).style("fill", "red").attr("fill_opacity", 0.6)
    svg.append("circle").attr("cx",700).attr("cy",310).attr("r", 6).style("fill", "grey").attr("fill_opacity", 0.6)
    svg.append("circle").attr("cx",700).attr("cy",340).attr("r", 6).style("fill", "blue").attr("fill_opacity", 0.6)

    svg.append("text").attr("x", 720).attr("y", 130).text("Israel").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 720).attr("y", 160).text("Pakistan").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 720).attr("y", 190).text("China").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 720).attr("y", 220).text("France").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 720).attr("y", 250).text("India").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 720).attr("y", 280).text("Russia").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 720).attr("y", 310).text("United Kingdom").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 720).attr("y", 340).text("United States").style("font-size", "15px").attr("alignment-baseline","middle")     


  }).catch(error => console.log(error));



  // Experiment below
  // Select body, append SVG area to it, and set its dimensions
// var svg = d3.select("#log_scatter")
// .append("svg")
// .attr("width", svgWidth)
// .attr("height", svgHeight);

// // Append a group area, then set its margins
// var chartGroup = svg.append("g")
// .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // Load data from assets/data/data.csv
// d3.csv("assets/data/cleaned_nuke.csv").then(data => {

// // Print the data
// console.log(data);

// // Cast the poverty and GDP values to numbers
// data.forEach(data => {
//   data.Nukes = +data.Nukes;
//   data.gdp_dollar = +data.gdp_dollar;

//   data.Country = data.Country 
//   console.log(data.Country)

//   data.color = data.color
//   console.log(data.color)


//   console.log(data.Nukes);
//   console.log(data.gdp_dollar);
// });

// // d3.extent returns the an array containing the min and max values for the property specified
// var xLinearScale = d3.scaleLinear()
//   .domain(d3.extent(data, data => +data.Nukes))
//   .range([0, chartWidth]);

// // Configure a linear scale with a range between the chartHeight and 0
// var yLinearScale = d3.scaleLinear()
//   .domain(d3.extent(data, data => +data.gdp_dollar))
//   .range([chartHeight, 0]);

// // Create two new functions passing the scales in as arguments
// // These will be used to create the chart's axes
// var bottomAxis = d3.axisBottom(xLinearScale);
// var leftAxis = d3.axisLeft(yLinearScale);

// // Add dots--Credit to d3 documentation writers at https://www.d3-graph-gallery.com/graph/scatter_basic.html
// svg.append('g')
// .selectAll("dot")
// .data(data)
// .enter()
// .append("circle")
// .attr("cx", function (d) { return xLinearScale(d.Nukes) + margin.left; } )
// .attr("cy", function (d) { return yLinearScale(d.gdp_dollar) + margin.top; } )
// .attr("r", 10)
// .attr("fill-opacity", 0.6)
// // .style("fill", "#69b3a2")
// .style("fill", function (d) { return d.color;})

// // Append an SVG group element to the chartGroup, create the left axis inside of it
// chartGroup.append("g")
//   .classed("axis", true)
//   .call(leftAxis);

// // Append an SVG group element to the chartGroup, create the bottom axis inside of it
// // Translate the bottom axis to the bottom of the page
// chartGroup.append("g")
//   .classed("axis", true)
//   .attr("transform", `translate(0, ${chartHeight})`)
//   .call(bottomAxis);


// // Append y-axis label                 
// chartGroup.append("text")
//   .attr("transform", "rotate(-90)")
//   .attr("y", 0 - margin.left)
//   .attr("x", 0 - (chartHeight / 2))
//   .attr("dy", "1em")
//   .classed("axis-text", true)
//   .text("GDP");               

// // Append x-axis label                 
// chartGroup.append("text")
//   .attr("transform","rotate(0)")
//   .attr("y", 0 + (chartHeight + margin.bottom / 2))
//   .attr("x", 0 + (chartWidth / 2))
//   .attr("dx", "1em")
//   .classed("axis-text", true)
//   .text("Number of Nukes");


// // Append Years  
//   chartGroup.append("g").selectAll("text")
//   .data(data)
//   .join("text")
//   .text(d => d.Year)
//   .attr("x", d => xLinearScale(d.Nukes))
//   .attr("y", d => yLinearScale(d.gdp_dollar))
//   .attr("text-anchor", "middle")
//   .attr("alignment-baseline", "central")
//   .attr("font-size", "10px");


// }).catch(error => console.log(error));
