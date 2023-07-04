"use strict";
window.onload = (event) => {
  // desktop frame settings :
  document.getElementById("about-popUpTab").style.display = "none";
  document.getElementById("about-sidebar").style.display = "block";

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

// IMAGE OBJECT ON MAP:
let imgObj;
imgObj = L.imageOverlay("assets/images/flowerAxis3.png",[[51.513, -0.09], [40.773941, -74.12544]]).addTo(map);

imgObj.addEventListener("click", function(){
  console.log("clicked on flowa")
})

  let popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked in " + e.latlng.toString ())
    .openOn(map);
}

map.on('click', onMapClick);


//   // Pop-up object ON MAP
//   let popup = L.popup()
//     .setContent("I am a standalone popup.");

//   // Second Pop-up object
//   let popup2 = L.popup()
//     .setContent("I am another popup.");

//   L.marker([51.513, -0.09]).bindPopup(popup).addTo(map);
//   L.marker([51.513, -0.0895]).bindPopup(popup2).addTo(map);


//mobile setups
if (L.Browser.mobile) {
    console.log("mobile version");
    document.getElementById("about-sidebar").style="display:none";
    document.getElementById("buttonBox-container").style.display = "block";
  let aboutButton = document.getElementById("mainButton");

  aboutButton.addEventListener("click", function(){
    document.getElementById("about-popUpTab").style="display:block";
    });


  function mainButton(){

    aboutButton.addEventListener("click", function(){
    console.log("bibidibabidbidoubooo");
    });
  }

  //close about:
    document.getElementById("about-popUpTab").addEventListener("click", function(){
    document.getElementById("about-popUpTab").style="display:none";
    });

}

}; //end windown on load