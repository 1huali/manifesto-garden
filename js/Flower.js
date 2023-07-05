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
        console.log(minBound,maxBound);
        //test coords:
        let latLngBounds = L.latLngBounds([minBound,maxBound]);
//
        this.imgOverlay = L.imageOverlay(this.img,[latLngBounds], {interactive:true}).addTo(map);
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



} //fin