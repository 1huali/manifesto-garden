    //this object creates a png into a map object on a map location and that is interactive

    class Flower {
        constructor(map, img, xPos, yPos, info, title) {
          this.map = map;
          this.img = img;
          this.xPos = xPos;
          this.yPos = yPos;
          this.title = title;
          this.info = info;
          this.seedArray = [];
      
          let pointXY = L.point(this.xPos, this.yPos);
          let pointlatlng = map.unproject(pointXY);
          this.minBound = [pointlatlng.lat, pointlatlng.lng];
          this.maxBound = [pointlatlng.lat + 10, pointlatlng.lng + 17];
      
          this.imgOverlay = L.imageOverlay(this.img, [this.minBound, this.maxBound], { interactive: true }).addTo(map);
      
          this.imgOverlay.on('click', () => {
            document.getElementById("sidebar-content-text").innerHTML = this.info;
            if (L.Browser.mobile) {
              document.getElementById("axisTab-container").style = "display:block";
              document.getElementById("axisTab-content").innerHTML = this.info;
              document.getElementById("axis-content-title").innerHTML = this.title;
            }
          });
        }

      //calculate the position of the seeds between themselves around a flower's center point
        calculatePosition(seedIndex, seedCount) {
          let offset = (2 * Math.PI) / seedCount;
          let angle = seedIndex * offset;
          let radius = 300;
          let xpos_pixel = this.xPos  + radius * Math.cos(angle);
          let ypos_pixel = this.yPos + radius * Math.sin(angle);
          return { xpos_pixel, ypos_pixel };
        }
      
        generateSeeds(seedCount) {
            for (let i = 0; i < seedCount; i++) {
              let position = this.calculatePosition(i, seedCount);
              let pointXY = L.point(position.xpos_pixel, position.ypos_pixel);
              let pointlatlngSeed = this.map.unproject(pointXY);
          
              let seed = new Seed( this.map, "assets/images/seedImg.png", pointlatlngSeed, "https://www.galeriegalerieweb.com/", this.xPos, this.yPos );
              let seed2 = new Seed( this.map, "assets/images/seedImg.png", pointlatlngSeed, "https://www.cameronsworld.net/", this.xPos, this.yPos );
              let seed3 = new Seed( this.map, "assets/images/seedImg.png", pointlatlngSeed, "https://obliquestrategies.ca/", this.xPos, this.yPos );
              let seed4 = new Seed( this.map, "assets/images/seedImg.png", pointlatlngSeed, "instagram.com/", this.xPos, this.yPos );
              this.seedArray.push(seed);
              this.seedArray.push(seed2);
              this.seedArray.push(seed3);
              this.seedArray.push(seed4);

            }
          }
      }