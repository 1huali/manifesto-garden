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
let axis1Text =   "allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo,allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo,allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo,allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, allo, ";
let axis2Text =   "hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello";
let axis3Text =   "beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop, boobib, beebop";

document.getElementById("sidebar-titlebox").addEventListener("click", function (){
document.getElementById("sidebar-content-text").innerHTML = "<article> Avec des engagements clairs et des politiques endossées par son conseil d’administration, la compagnie espère contribuer à réduire les inégalités et à faire avancer le milieu artistique vers des pratiques plus saines. </article> <article> L’égalité de genre et de sexe, la décolonisation et la diversification des programmations artistiques sont des priorités pour MH. Au sein de ses différents projets à titre de diffuseur et lieu de résidence (RIRH, Salon58, FURIES), la présence d’artistes autochtones, de personnes racisées, de membres de communautés queer et/ou minorisées est envisagée comme une norme, et non comme une exception. Ces personnes présentent leurs œuvres et s’adressent au public lors de spectacles, rencontres, panels et discussions. MH met également ses valeurs en action avec des commissariats partagés, la promotion de ses projets dans une optique décoloniale, ainsi que des démarches d’auto-éducation et de partage de connaissances avec le milieu culturel. L’organisme s’engage à soutenir les luttes contre la domination coloniale, le sexisme, le racisme et la discrimination avec des gestes concrets : actions de bénévolat ciblées; diffusion des discours liés à ces luttes; mise sur pied de projets structurants pour stimuler la rencontre entre artistes autochtones et allochtones; attention portée à la mise en valeur des langues et traditions autochtones, reconnaissance du territoire. Des perspectives féministes intersectionnelles guident par ailleurs les choix de la compagnie dans toutes ses initiatives. MH adopte un langage épicène dans ses communications internes et externes, en favorisant la neutralité et, lorsque nécessaire, en utilisant les doublets et doublets abrégés. Les différentes programmations artistiques de Mandoline Hybride (RIRH, Salon58, FURIES) sont portées par une volonté ferme de mettre en avant le travail des femmes et personnes non-binaires. </article>";
document.getElementById("sidebar-content-subtitle").innerHTML = "✿";



// function appendResourcesMsg(msg) {
//   let resourceContainer = document.querySelector("sidebar-content-text");
//   let dataHTMLElement = document.createElement("p");
//   dataHTMLElement.classList.add("mode-prop");
//   dataHTMLElement.innerHTML = msg;
//   consoleContainer.insertBefore(dataHTMLElement, resourceContainer.firstChild);



// }


});

           //AXIS OBJECTS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 

let linkArray= ["https://www.instagram.com/","https://www.galeriegalerieweb.com/","https://www.youtube.com/","https://obliquestrategies.ca/","https://www.pinterest.ca/","https://mynoise.net/NoiseMachines/binauralBrainwaveGenerator.php"];
let linkArray2=["null", "null2", "null3"];
let linkArray3=["yo","yo2","yo3"];
let resources1Text =   "RESSOURCES ICI AXE 1";
let resources2Text =   "RESOURCES ICI AXE 2";
let resources3Text =   "RESOURCES ICI AXE 3";

let axisObj = new Flower(map,1,"assets/images/flowerAxis.png",1500,2800,axis1Text,"ÉCORESPONSABILITÉ",linkArray, resources1Text);
let axisObj2 = new Flower(map,2,"assets/images/flowerAxis2.png",1980,1800,axis2Text,"DÉCOLONISATION",linkArray2, resources2Text);
let axisObj3 = new Flower(map,3,"assets/images/flowerAxis3.png",3000,3200,axis3Text,"OPEN SOURCE",linkArray3, resources3Text);
let axisArray=[];
axisArray.push(axisObj);
axisArray.push(axisObj2);
axisArray.push(axisObj3);

//GENERATE SEEDS AROUND EACH FLOWER OBJECT
axisObj.generateSeeds(5);
axisObj2.generateSeeds(10);
axisObj3.generateSeeds(3);

           //BUTTONS OBJECTS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
      document.getElementById("resources-desktop-button").addEventListener("click", function(){
      document.getElementById("axisTab-content").innerHTML = "resources to implement";
      //content append : (À FINIR)
      appendResourcesMsg("> Welcome back, ");
      console.log("clickekdkdkdkkd resources")
      
    });
    document.getElementById("about-desktop-button").addEventListener("click", function(){
      console.log("clickekdkdkdkkd about")
      document.getElementById("axisTab-content").innerHTML = "axisInfos to implement";
    });


           //MOBILE SETUPS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
if (L.Browser.mobile) {
    console.log("mobile version");
    document.getElementById("about-sidebar").style="display:none";
    document.getElementById("buttonBox-container").style.display = "block";
  let aboutButton = document.getElementById("mainButton");

  aboutButton.addEventListener("click", function(){
    document.getElementById("about-popUpTab").style="display:block";
    });

    //click on the window to close it
    document.getElementById("closeButton").addEventListener("click", function(){
      document.getElementById("axisTab-container").style = "display:none"

    })


  function mainButton(){
    aboutButton.addEventListener("click", function(){
    console.log("bibidibabidbidoubooo");
    });
  }

  //close "about":
    document.getElementById("about-popUpTab").addEventListener("click", function(){
    document.getElementById("about-popUpTab").style="display:none";
    });

    //BUTTONS --------------------
    document.getElementById("resources-mobile-button").addEventListener("click", function(){
      document.getElementById("axisTab-content").innerHTML = "resources to implement";
      console.log("clickekdkdkdkkd resources")
    });
    document.getElementById("about-mobile-button").addEventListener("click", function(){
      console.log("clickekdkdkdkkd about")
      document.getElementById("axisTab-content").innerHTML = "axisInfos to implement";
    });

}

}; //end windown on load