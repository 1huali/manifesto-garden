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
// let imgObj3 = L.imageOverlay("assets/images/flowerAxis3.png",[[51.520493, -0.046692], [51.520493+10, -0.046692+17]], {interactive:true}).addTo(map);
// let imgObj2 = L.imageOverlay("assets/images/flowerAxis2.png",[[40.773941+10, -74.12544+17], [40.773941, -74.12544]], {interactive:true}).addTo(map);
let axisArray=[];
let axisObj = new Axis(map,"assets/images/flowerAxis.png",[36.315125, -21.796875],[36.315125+10, -21.796875+17]);
let axisObj2 = new Axis(map,"assets/images/flowerAxis2.png",[40.773941+10, -74.12544+17], [40.773941, -74.12544]);
let axisObj3 = new Axis(map,"assets/images/flowerAxis3.png",[51.520493, -0.046692], [51.520493+10, -0.046692+17]);
axisArray.push(axisObj);
axisArray.push(axisObj2);
axisArray.push(axisObj3);


for (let i=0;i<axisArray.length;i++){
  axisArray[i].display(map);
  axisArray[i].onClick();
}


// on click:
// imgObj.addEventListener("click", function(){
//   console.log("clicked on flowa")
// });

// imgObj.on("click", function () {
//   console.log("Clicked on flower");
// });

// imgObj2.on("click", function () {
//   console.log("Clicked on flower2");
// });

// imgObj3.on("click", function () {
//   console.log("Clicked on flower3");
// });

//POP-UP SETTINGS
  let popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked in " + e.latlng.toString ())
    .openOn(map);
}
// map.on('click', onMapClick);



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