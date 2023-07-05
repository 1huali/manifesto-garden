    //this object creates a png into a map object on a map location and that is interactive.
    class Seed   {
        constructor(map,img,minBound,maxBound){

        this.map=map
        this.img=img;
        // this.link=link; //lien de la ressource
        // this.info=info; //description
        console.log(this.img)
//not linked with a flower yet
        this.minBound=minBound;
        this.maxBound=maxBound;

        this.imgOverlay = L.imageOverlay(this.img,[this.minBound, this.maxBound], {interactive:true}).addTo(map);

        this.imgOverlay.on('click', function() {
//             document.getElementById("sidebar-content-text").innerHTML = info;
console.log("clicked seed");
window.open('https://www.galeriegalerieweb.com/','_blank');
//             if (L.Browser.mobile) {
// //code for mobile
//             }
        });   
    }

} //fin