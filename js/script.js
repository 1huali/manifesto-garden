"use strict";
window.onload = (event) => {
  // desktop frame settings :
  document.getElementById("about-popUpTab").style.display = "none";
  document.getElementById("about-sidebar").style.display = "block";

           //MAP SETTING ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
  let map = L.map("map").setView([51.505, -0.09], 4);
  map.removeControl(map.zoomControl);

  // tile-images
  let tileImgArray = [];
  for (let i = 1; i <= 54; i++) {
    let tileImg = new Image();
    tileImg.src = `assets/data_jaune-splitIG/${i}.png`;
    tileImgArray.push(tileImg);
  }
           //TILES SETTING ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 

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
           //DESC OBJECTS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
// let axis1Text = document.getElementById("axis1Text");
// let axis2Text = document.getElementById("axis2Text");
// let axis3Text = document.getElementById("axis3Text");
let axis1Text =   "allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo,allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo,allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo,allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, ";
let axis2Text =   "hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello";
let axis3Text =   "beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop";

document.getElementById("sidebar-titlebox").addEventListener("click", function (){
document.getElementById("sidebar-content-text").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu";
});

           //AXIS OBJECTS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
let axisArray=[];
let axisObj = new Flower(map,"assets/images/flowerAxis.png",[36.315125, -21.796875],[36.315125+10, -21.796875+17],axis1Text,"axis # : babababbaba");
let axisObj2 = new Flower(map,"assets/images/flowerAxis2.png",[40.773941+10, -74.12544+17], [40.773941, -74.12544],axis2Text,"axis # : bebebebebeb");
let axisObj3 = new Flower(map,"assets/images/flowerAxis3.png",[51.520493, -0.046692], [51.520493+10, -0.046692+17],axis3Text,"axis # : boobooobobob");
axisArray.push(axisObj);
axisArray.push(axisObj2);
axisArray.push(axisObj3);


//sabine edits:
// let axis1latLngBounds=L.latLngBounds([36.315125, -21.796875],[36.315125+10, -21.796875+17]);
// let axisObj = new Axis(map,"assets/images/flowerAxis.png",axis1latLngBounds,axis1Text);
// let axis2latLngBounds=L.latLngBounds([40.773941+10, -74.12544+17], [40.773941, -74.12544]);
// let axisObj2 = new Axis(map,"assets/images/flowerAxis2.png",axis2latLngBounds,axis2Text);
// let axis3latLngBounds=L.latLngBounds([51.520493, -0.046692], [51.520493+10, -0.046692+17]);
// let axisObj3 = new Axis(map,"assets/images/flowerAxis3.png",axis3latLngBounds,axis3Text);
// axisArray.push(axisObj);
// axisArray.push(axisObj2);
// axisArray.push(axisObj3);

//POP-UP SETTINGS
  let popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked in " + e.latlng.toString ())
    .openOn(map);
}
// map.on('click', onMapClick);



           //MOBILE SETUPS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
if (L.Browser.mobile) {
    console.log("mobile version");
    document.getElementById("about-sidebar").style="display:none";
    document.getElementById("buttonBox-container").style.display = "block";
  let aboutButton = document.getElementById("mainButton");

  aboutButton.addEventListener("click", function(){
    document.getElementById("about-popUpTab").style="display:block";
    });

    document.getElementById("closeButton").addEventListener("click", function(){
      document.getElementById("axisTab-container").style = "display:none"

    })


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