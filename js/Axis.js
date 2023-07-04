class Axis {

    constructor(map,img){
        this.map=map
        this.img="assets/images/flowerAxis.png";
        console.log(this.img)
        this.minBound=[36.315125, -21.796875];
        this.maxBound=[36.315125+10, -21.796875+17];
        // this.hoverTitle="";
        // this.hoverTxt="";
        // this.n_latLng = new L.latLng(lat,lng);
        
    }

    //this object creates a png into a map object on a map location and that is interactive
    display(){
        L.imageOverlay(this.img,[this.minBound, this.maxBound], {interactive:true}).addTo(map);
    }
} //fin