class Axis {

    constructor(map,img,minBound,maxBound){
        this.map=map
        this.img=img;
        console.log(this.img)
        this.minBound=minBound;
        this.maxBound=maxBound;

        // this.this.n_latLng =  new L.latLng(lat,lng);
        // this.hoverTitle="";
        // this.hoverTxt="";
        // this.n_latLng = new L.latLng(lat,lng);
        
    }

    //this object creates a png into a map object on a map location and that is interactive
    display(map){
        // this.point = this.map.latLngToLayerPoint(this.n_latLng);
        // this.xPos = this.point.x;
        // this.yPos = this.point.y;
        L.imageOverlay(this.img,[this.minBound, this.maxBound], {interactive:true}).addTo(map);

    }

    onClick(){
    this.img.on("click", function () {
    console.log("Clicked on flower");
    });
    }

    
} //fin