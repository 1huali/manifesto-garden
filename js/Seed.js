class Seed extends Flower {
  constructor(map, img, coord, link, flowerPosition) {
    super(map, 0, img, 0, 0, "", "", [], ""); // Pass dummy values for axisNumber, xPos, yPos, info, title, linkArray, and resourceInfo
    this.link = link;
    this.coord = coord;
    this.flowerPosition = flowerPosition; // Add the flower position variable

    // Calculate the pixel coordinates based on the latitude and longitude
    const pointLatLng = L.latLng(coord.lat, coord.lng);
    const pointXY = map.project(pointLatLng);

    // Convert the pixel coordinates to map layer coordinates
    const pointLayer = map.layerPointToLatLng(pointXY);

    // Update the xPos and yPos properties with the map layer coordinates
    this.xPos = pointLayer.lat;
    this.yPos = pointLayer.lng;

    // Update the minBound and maxBound based on the new xPos and yPos
    this.minBound = [this.coord.lat, this.coord.lng];
    this.maxBound = [this.coord.lat + 20, this.coord.lng + 20];

    this.imgOverlay = L.imageOverlay(this.img, [this.minBound, this.maxBound], { interactive: true }).addTo(map);
    this.imgOverlay.on('click', () => {
      window.open(this.link, '_blank');
    });

    this.position = null;
  }
}
