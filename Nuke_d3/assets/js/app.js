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
d3.csv("assets/data/cleaned_nuke.csv").then(data => {

  // Print the data
  console.log(data);

  // Cast the poverty and GDP values to numbers
  data.forEach(data => {
    data.Nukes = +data.Nukes;
    data.GDP = +data.GDP;
    console.log(data.Nukes);
    console.log(data.GDP);
  });

  // d3.extent returns the an array containing the min and max values for the property specified
  var xLinearScale = d3.scaleLinear()
    .domain(d3.extent(data, data => +data.Nukes))
    .range([0, chartWidth]);

  // Configure a linear scale with a range between the chartHeight and 0
  var yLinearScale = d3.scaleLinear()
    .domain(d3.extent(data, data => +data.GDP))
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
  .attr("cy", function (d) { return yLinearScale(d.GDP) + margin.top; } )
  .attr("r", 10)
  .attr("fill-opacity", 0.6)
  .style("fill", "#69b3a2")

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


  // // Append state abbreviations  
  //   chartGroup.append("g").selectAll("text")
  //   .data(data)
  //   .join("text")
  //   .text(d => d.abbr)
  //   .attr("x", d => xLinearScale(d.Nukes))
  //   .attr("y", d => yLinearScale(d.GDP))
  //   .attr("text-anchor", "middle")
  //   .attr("alignment-baseline", "central")
  //   .attr("font-size", "10px");


  }).catch(error => console.log(error));
