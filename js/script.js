"use strict";
window.onload = (event) => {
  // desktop frame settings :
  document.getElementById("about-popUpTab").style.display = "none";
  document.getElementById("about-sidebar").style.display = "block";
  document.getElementById("buttonBox-container").style.display = "none";

  // map object:
  let map = L.map("map").setView([51.505, -0.09], 13);
  map.removeControl(map.zoomControl);

  // tile-images
  let tileImgArray = [];
  for (let i = 1; i <= 54; i++) {
    let tileImg = new Image();
    tileImg.src = `assets/data_jaune-splitIG/${i}.png`;
    tileImgArray.push(tileImg);
  }

  L.TileLayer.Custom = L.TileLayer.extend({
    getTileUrl: function (coords) {
      let i = Math.floor(Math.random() * tileImgArray.length);
      return tileImgArray[i].src;
    },
    options: {
      tileSize: 512, // Adjust the tile size according to your images
      attribution: "Tile images © OpenStreetMap contributors",
    },
  });

  L.tileLayer.custom = function () {
    return new L.TileLayer.Custom();
  };

  L.tileLayer.custom().addTo(map);

  let flowerAxis1= document.getElementById("flowerAxis1");
  let flowerAxis2=document.getElementById("flowerAxis2") ;
  let flowerAxis3 = document.getElementById("flowerAxis3");

//   // Sticky image marker
  let imageUrl = "assets/images/flowerAxis.jpg";
//   let imageUrl2= "assets/images/flora-testPopup2.png"; 
  let imageIcon = L.icon({
    iconUrl: imageUrl,
    iconSize: [70, 70], // Adjust the icon size as needed
    iconAnchor: [24, 24], // Adjust the icon anchor point as needed
  });
//   let imageMarker = L.marker([51.513, -0.09], { icon: imageIcon }).addTo(map);

//   // Pop-up object
//   let popup = L.popup()
//     .setContent("I am a standalone popup.");

//   // Second Pop-up object
//   let popup2 = L.popup()
//     .setContent("I am another popup.");

//   L.marker([51.513, -0.09]).bindPopup(popup).addTo(map);
//   L.marker([51.513, -0.0895]).bindPopup(popup2).addTo(map);

  
    //marker image trigger something on click event : 
// imageMarker.addEventListener("click", function(){
//     console.log("CLICKD SEED")
// })
const imageOverlay = L.imageOverlay(imageUrl, [[51.513, -0.09]]).addTo(map);
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