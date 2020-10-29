// Fetch the JSON data and console log it
// // variables for each thing needed

// /**
//  * @param {array} rows
//  * @param {integer} index
//  */


// bring in data from data/n

var url = `data/coordinates_json.json`;

console.log(url);

d3.json(url).then(function(data) {
    console.log(data);
});

