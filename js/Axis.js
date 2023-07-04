    //this object creates a png into a map object on a map location and that is interactive

class Axis {
    constructor(map,img,minBound,maxBound){
        this.map=map
        this.img=img;
        console.log(this.img)
        this.minBound=minBound;
        this.maxBound=maxBound;
        this.imgOverlay = L.imageOverlay(this.img,[this.minBound, this.maxBound], {interactive:true}).addTo(map);
        // this.hoverTitle="";
        // this.hoverTxt="";
        // this.n_latLng = new L.latLng(lat,lng);
    }

    onClick(img){
        this.imgOverlay.on('click', function() {
            console.log('I have been clicked ' + img);
        });    
    }

} //fin