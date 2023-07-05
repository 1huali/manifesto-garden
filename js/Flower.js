    //this object creates a png into a map object on a map location and that is interactive

class Flower {
    constructor(map,img,minBound,maxBound,info,title){
        this.map=map
        this.img=img;
        console.log(this.img)
        // console.log(coord);
        this.title=title;

        // this.minBound=[coord.lat, coord.lng];
        // this.maxBound =[coord.lat+10, coord.lng+10];
        this.minBound=minBound;
        this.maxBound=maxBound;
        //test coords:
        let latLngBounds = L.latLngBounds([minBound,maxBound]);
        map.fitBounds(latLngBounds);
        console.log(latLngBounds) //error


        this.imgOverlay = L.imageOverlay(this.img,latLngBounds, {interactive:true}).addTo(map);
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

    //creates a Seed and pushes it to the this.seedArray
    generateSeeds(seedCount) {
        for (let i = 0; i < seedCount; i++) {
            //?? what to use for coords :
          let seed = new Seed(this.map,"assets/images/seedImg.png",[this.minBound,this.maxBound],"https://www.galeriegalerieweb.com/");
          seed.position = calculatePosition(i, seedCount);
          seed.addToMap(this.map);
          this.seedArray.push(seed);
        }
      }

} //fin