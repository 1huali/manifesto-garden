    //this object creates a png into a map object on a map location and that is interactive.
    class Seed   {
        constructor(map,img,coord,link){

        this.map=map
        this.img=img;
        this.link=link; //lien de la ressource
        //test getting (x,y) position (from sr example):
        console.log(coord);
        this.minBound=[coord.lat, coord.lng];
        this.maxBound =[coord.lat+10, coord.lng+10];

        console.log(this.img)
        // this.minBound=minBound;
        // this.maxBound=maxBound;
        //test seed:
        this.seedArray = [];


        this.imgOverlay = L.imageOverlay(this.img,[this.minBound, this.maxBound], {interactive:true}).addTo(map);

        this.imgOverlay.on('click', function() {
//             document.getElementById("sidebar-content-text").innerHTML = info;
            window.open(link,'_blank');
//             if (L.Browser.mobile) {
// //code for mobile
//             }
        });   

        this.imgOverlay.on("mouseover", function(){
            console.log("mouse hovering seed")
//temporary pop-up that appears at mouse hover on seed
            let popup = L.popup()
            .setLatLng(this.maxBound)
            .setContent(link)
            .openOn(map);
        });

        //test seed :
        this.position = null;
    }




} //fin