    //this object creates a png into a map object on a map location and that is interactive

    class Flower {
        constructor(map, axisNumber, img, xPos, yPos, info, title,linkArray, resourceInfo) {
          this.map = map;
          this.img = img;
          this.xPos = xPos;
          this.yPos = yPos;
          this.title = title;
          this.info = info;
          this.linkArray = linkArray;
          this.seedArray = [];
          this.axisNumber= axisNumber;
          this.resourceInfo= resourceInfo;
          console.log(resourceInfo);
      
          let pointXY = L.point(this.xPos, this.yPos);
          let pointlatlng = map.unproject(pointXY);
          this.minBound = [pointlatlng.lat, pointlatlng.lng];
          this.maxBound = [pointlatlng.lat + 10, pointlatlng.lng + 17];
      
          this.imgOverlay = L.imageOverlay(this.img, [this.minBound, this.maxBound], { interactive: true }).addTo(map);

//Click event on an element and updates the content of various elements based on the value of this.info and this.title.
          this.imgOverlay.on('click', () => {
            document.getElementById("sidebar-content-text").innerHTML = this.info;
            document.getElementById("sidebar-content-subtitle").innerHTML = this.title;

            if (L.Browser.mobile) {
              document.getElementById("axisTab-container").style = "display:block";
              document.getElementById("axisTab-content").innerHTML = this.info;
              document.getElementById("axisTab-content-subtitle").innerHTML = this.title;
            }
          });

          let marker = new L.marker([pointlatlng.lat, pointlatlng.lng], { opacity: 0.00 }); //opacity may be set to zero
          marker.bindTooltip(this.title, {permanent: true, className: "my-leaflet-tool-tip-class", offset: [15, 70] });
          marker.addTo(map);
        }

      //calculate the position of the seeds in offset between themselves around a flower's center point
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
          
                let seed = new Seed(this.map,"assets/images/seedImg.png", pointlatlngSeed, this.linkArray[i]);
                this.seedArray.push(seed);
            }
          }
          
          appendResourcesMsg(resourceInfo) {
            let resourceContainer = document.querySelector("sidebar-content-text");
            let dataHTMLElement = document.createElement("p");
            dataHTMLElement.classList.add("mode-prop");
            dataHTMLElement.innerHTML = resourceInfo;
            consoleContainer.insertBefore(dataHTMLElement, resourceContainer.firstChild);
          
            
          
          }
      }