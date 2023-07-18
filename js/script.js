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
      attribution: "Wawa Li for Galerie Galerie © OpenStreetMap contributors and the internet community - THANK U",
    },
  });

  L.tileLayer.custom = function () {
    return new L.TileLayer.Custom();
  };

  L.tileLayer.custom().addTo(map);


           //JSON OBJECTS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
           let axisArray=[];
           let selectedAxis;


           async function fetchData() {
            try {
              const response = await fetch("Axes.json");
              const jsonData = await response.json();
              // console.log(jsonData);
          
              // Assuming you can access the properties from jsonData
              // let flowerData = JSON.stringify(jsonData.axes); *TO BE CREATED
              // let numSeeds = jsonData.axes.links.length;

              // Create the Flower object using the JSON data
              let axisObj = new Flower(map,1,"assets/images/flowerAxis.png",1500,2800,JSON.stringify(jsonData.axes[0].description),jsonData.axes[0].name,jsonData.axes[0].links, "link obj tdb");
              let axisObj2 = new Flower(map,2,"assets/images/flowerAxis2.png",1980,1800,JSON.stringify(jsonData.axes[1].description),jsonData.axes[1].name,jsonData.axes[1].links, "link obj tdb");
              let axisObj3 = new Flower(map,3,"assets/images/flowerAxis3.png",3000,3200,JSON.stringify(jsonData.axes[2].description),jsonData.axes[2].name,jsonData.axes[2].links, "link obj tdb");

              axisArray.push(axisObj);
              axisArray.push(axisObj2);
              axisArray.push(axisObj3);

              //GENERATE SEEDS AROUND EACH FLOWER OBJECT
              axisObj.generateSeeds(5);
              axisObj2.generateSeeds(10);
              axisObj3.generateSeeds(3);

                // Append links to the sidebar
                document.getElementById("resources-desktop-button").addEventListener("click", function(){
                let selectedAxis = document.getElementById("sidebar-content-subtitle").getAttribute("flowerAxis");
              axisObj.appendLinksToSidebar(jsonData.axes[selectedAxis].links); 

              if (L.Browser.mobile) {
                //CHANGER MOBILE BUGG DOESNT PRINT AT CLICK :
                let selectedAxis = document.getElementById("axisTab-content").getAttribute("flowerAxis");
                axisObj.appendLinksToSidebar(jsonData.axes[selectedAxis].links); 
              }
            });

              // Now you can use the flower object as needed
            } catch (error) {
              console.error("Error fetching the JSON file:", error);
            }
          }
          
          fetchData(); // Call the function to fetch JSON and create the Flower object
          
           

           //DESC OBJECTS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 

//Lorsque l'utilisateur clique sur le titre/logo principal, les propriétés par défaut se réinitialisent :
document.getElementById("sidebar-titlebox").addEventListener("click", function (){
document.getElementById("sidebar-content-text").innerHTML = "<article> Avec des engagements clairs et des politiques endossées par son conseil d’administration, la compagnie espère contribuer à réduire les inégalités et à faire avancer le milieu artistique vers des pratiques plus saines. </article> <article> L’égalité de genre et de sexe, la décolonisation et la diversification des programmations artistiques sont des priorités pour MH. Au sein de ses différents projets à titre de diffuseur et lieu de résidence (RIRH, Salon58, FURIES), la présence d’artistes autochtones, de personnes racisées, de membres de communautés queer et/ou minorisées est envisagée comme une norme, et non comme une exception. Ces personnes présentent leurs œuvres et s’adressent au public lors de spectacles, rencontres, panels et discussions. MH met également ses valeurs en action avec des commissariats partagés, la promotion de ses projets dans une optique décoloniale, ainsi que des démarches d’auto-éducation et de partage de connaissances avec le milieu culturel. L’organisme s’engage à soutenir les luttes contre la domination coloniale, le sexisme, le racisme et la discrimination avec des gestes concrets : actions de bénévolat ciblées; diffusion des discours liés à ces luttes; mise sur pied de projets structurants pour stimuler la rencontre entre artistes autochtones et allochtones; attention portée à la mise en valeur des langues et traditions autochtones, reconnaissance du territoire. Des perspectives féministes intersectionnelles guident par ailleurs les choix de la compagnie dans toutes ses initiatives. MH adopte un langage épicène dans ses communications internes et externes, en favorisant la neutralité et, lorsque nécessaire, en utilisant les doublets et doublets abrégés. Les différentes programmations artistiques de Mandoline Hybride (RIRH, Salon58, FURIES) sont portées par une volonté ferme de mettre en avant le travail des femmes et personnes non-binaires. </article>";
document.getElementById("sidebar-content-subtitle").innerHTML = "✿";
document.getElementById('about-desktop-button').value = "à propos"
});

let francais = false;
//toggle function between french and english :
// **BUG?? 
document.getElementById("language-button").addEventListener("click", function() {
  
  if (francais === true) {
    console.log("Switching to english");
    document.getElementById('language-button').value = "english";
    francais = false;
  } else {
    document.getElementById('language-button').value = "français";
    console.log("Switching to français");
    francais = true;
  }
});
            
                       //BUTTONS OBJECTS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
                  document.getElementById("resources-desktop-button").addEventListener("click", function(){
                    //should be all resources:
                  document.getElementById("axisTab-content").innerHTML = "resources to implement";
                  document.getElementById("sidebar-content-text").innerHTML = "resources to implement";                  
                  
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
    document.getElementById("about-mobile-button").addEventListener("click", function(){
      console.log("clickekdkdkdkkd about")
      document.getElementById("axisTab-content").innerHTML = "axisInfos to implement";
    });

}

}; //end windown on load