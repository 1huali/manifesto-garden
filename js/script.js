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


    // mapp object :
    let map = L.map('map').setView([51.505, -0.09], 13);
    map.removeControl(map.zoomControl);
    
    //flower object DOESTN WORK :
//     let imageUrl = 'assets/images/flora-test.png',
//     imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
    
// L.imageOverlay(imageUrl, imageBounds).addTo(map);
// console.log(L.imageOverlay);

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

let aboutButton = document.getElementById("mainButton");

aboutButton.addEventListener("click", function(){
console.log("bibidibabidbidoubooo")
});


//mobile setups
if (L.Browser.mobile) {
    console.log("mobile version");
    document.getElementById("about-sidebar").style="display:none";
    document.getElementById("mainButton").style="display:block";

    aboutButton.addEventListener("click", function(){
    document.getElementById("about-popUpTab").style="display:block";
    });

    document.getElementById("about-popUpTab").addEventListener("click", function(){
    document.getElementById("about-popUpTab").style="display:none";
    });

}

}; //end windown on load