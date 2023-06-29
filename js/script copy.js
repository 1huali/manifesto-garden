/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
window.onload = (event) => {
    //desktop settings :
    document.getElementById("about-popUpTab").style="display:none";
    document.getElementById("about-sidebar").style="display:block";
    document.getElementById("mainButton").style="display:none";


// Create the Leaflet map
var map = L.map('map').setView([0, 0], 2);

// Add the base tile layer
var baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Define the number of rows and columns in the grid
var numRows = 7;
var numCols = 6;

// Create an array to store the tile layers
var tileLayers = [];

// Create an array to store the tile bounds
var tileBoundsArray = [];

// Loop through each tile
for (var row = 0; row < numRows; row++) {
  for (var col = 0; col < numCols; col++) {
    // Create the tile layer for the current tile
    var tileUrl = 'assets/floraTile-test/' + (row * numCols + col + 1) + '.png';
    var tileLayer = L.tileLayer(tileUrl, {
      tileSize: 256,
      opacity: 1
    });

    // Calculate the tile boundaries
    var north = 90 - (row * (180 / numRows));
    var south = 90 - ((row + 1) * (180 / numRows));
    var west = col * (360 / numCols) - 180;
    var east = (col + 1) * (360 / numCols) - 180;

    // Define the bounds for the tile layer
    var tileBounds = L.latLngBounds([south, west], [north, east]);

    // Add the tile layer and bounds to the arrays
    tileLayers.push(tileLayer);
    tileBoundsArray.push(tileBounds);
  }
}

// Add all tile layers to the map
tileLayers.forEach(function(tileLayer) {
  tileLayer.addTo(map);
});

// Calculate the overall bounds of all tile layers
var overallBounds = L.latLngBounds(tileBoundsArray);

// Fit the map to the overall bounds of all tile layers
map.fitBounds(overallBounds);



}; //end windown on load