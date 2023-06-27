/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
window.onload = (event) => {
    
    // mapp object :
    let map = L.map('map').setView([51.505, -0.09], 13);
    map.removeControl(map.zoomControl);
    
    // tile-images
    let tile1 = document.getElementById("tileImg1");
    let tile2 = document.getElementById("tileImg2");
    let tile3 = document.getElementById("tileImg3");
    let tile4 = document.getElementById("tileImg4");
let tileImgArray = [];
tileImgArray.push(tile1);
tileImgArray.push(tile2);
tileImgArray.push(tile3);
tileImgArray.push(tile4);


L.TileLayer.Kitten = L.TileLayer.extend({
    getTileUrl: function(coords) {
        let i = Math.ceil( Math.random() * 3 );
        console.log(tileImgArray[i].src);
        return tileImgArray[i].src;
    }
});

L.tileLayer.grass = function() {
    return new L.TileLayer.Kitten();
}

L.tileLayer.grass().addTo(map);

// pop-up object:
let popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);


}; //end windown on load