    //this object creates a png into a map object on a map location and that is interactive

class Flower {
    constructor(map,img,xPos,yPos,info,title){
        this.map=map
        this.img=img;
        this.xPos = xPos;
        this.yPos = yPos;
        console.log(this.img)
        // console.log(coord);
        this.title=title;

        /*SABINE:: TO USE THIS YOU GIVE PIXEL COORDINATES ...  AND THEN CONVERT TO LAT LONG -
        AS THE IMAGE OVERLAY NEEDS LAT_LONG
        */
       //This function converts a pixel position into a lat/lng coordinate : 
        let pointXY = L.point(this.xPos, this.yPos);
        console.log("Point in x,y space: " + pointXY);

        // convert to lat/lng space
        let pointlatlng = map.unproject(pointXY);

        this.minBound=[pointlatlng.lat, pointlatlng.lng];
        this.maxBound =[pointlatlng.lat+10, pointlatlng.lng+17];


        this.imgOverlay = L.imageOverlay(this.img,[this.minBound, this.maxBound], {interactive:true}).addTo(map);
        this.info=info;
        this.seedArray=[];


        this.imgOverlay.on('click', function() {
            document.getElementById("sidebar-content-text").innerHTML = info;

            if (L.Browser.mobile) {
            document.getElementById("axisTab-container").style = "display:block"
            document.getElementById("axisTab-content").innerHTML = info;
            document.getElementById("axis-content-title").innerHTML = title;
            }
        });   
        // this.n_latLng = new L.latLng(lat,lng);
    }


    //CALCULATE THE POS USING X PIXEL AND Y PIXEL
    calculatePosition =function (seedIndex, seedCount) {
        // Calculate and return the position based on the index and count
        // You can use trigonometry or any other logic based on your requirements
        // For simplicity, let's assume a linear distribution
        let offset = (2 * Math.PI / seedCount);
       // console.log(offset);
       //RADIAL POSITION TO THE FLOWER:
        let angle= seedIndex*offset;
        // console.log(angle);
        let radius = 300; // Adjust the radius as needed
        let randomNum = Math.random (0,1)
        console.log(randomNum)
        let xpos_pixel = (this.xPos+ randomNum)+ (radius * Math.cos(angle));
        let ypos_pixel = this.yPos+ radius * Math.sin(angle);
       console.log(xpos_pixel,ypos_pixel)
       //devrait randomize une chiffre entre blabla et blabla autour de la fleur
        return { xpos_pixel,ypos_pixel };
      }

    //creates a Seed and pushes it to the this.seedArray
    generateSeeds(seedCount) {
        for (let i = 0; i < seedCount; i++) {

            let position = this.calculatePosition(i, seedCount);

            let pointXY = L.point(position.xpos_pixel, position.ypos_pixel);
            console.log("Point in x,y space: " + pointXY);

            let pointlatlngSeed = this.map.unproject(pointXY);
            let seed = new Seed(this.map,"assets/images/seedImg.png",pointlatlngSeed,"https://www.galeriegalerieweb.com/");

          this.seedArray.push(seed);
        }
      }

} //fin