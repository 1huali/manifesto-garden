    //this object creates a png into a map object on a map location and that is interactive

    class Flower {
        constructor(map, axisNumber, img, xPos, yPos, description, title,linkArray, resourceInfo) {
          this.map = map;
          this.img = img;
          this.xPos = xPos;
          this.yPos = yPos;
          this.title = title;
          this.description = description;
          this.linkArray = linkArray;
          this.seedArray = [];
          this.axisNumber= axisNumber;
          this.resourceInfo= resourceInfo;
      
          let pointXY = L.point(this.xPos, this.yPos);
          let pointlatlng = map.unproject(pointXY);
          this.minBound = [pointlatlng.lat, pointlatlng.lng];
          this.maxBound = [pointlatlng.lat + 30, pointlatlng.lng + 70];
      
          this.imgOverlay = L.imageOverlay(this.img, [this.minBound, this.maxBound], { interactive: true }).addTo(map);

//Click event on an element and updates the content of various elements based on the value of this.description and this.title.
          this.imgOverlay.on('click', () => {
            document.getElementById("sidebar-content-text").innerHTML = this.description;
            document.getElementById("sidebar-content-subtitle").innerHTML = this.title;
            document.getElementById("sidebar-content-subtitle").setAttribute("flowerAxis", axisNumber-1);
            // selectedAxis=axisNumber;

                 //button change title:
        let button = document.getElementById('about-desktop-button');
        button.value = title;
      

            if (L.Browser.mobile) {
              document.getElementById("axisTab-container").style = "display:block";
              document.getElementById("axisTab-content").innerHTML = this.description;
              document.getElementById("axisTab-content-subtitle").innerHTML = this.title;
            }
          });

          let marker = new L.marker([pointlatlng.lat, pointlatlng.lng], { opacity: 0.00 }); //opacity may be set to zero
          marker.bindTooltip(this.title, {permanent: true, className: "my-leaflet-tool-tip-class", offset: [15, 70] });
          marker.addTo(map);

          // console.log(`axe: ${this.title}, Descr: ${this.description}, Links: ${this.linkArray}`);
             // Create and style the title element
    // this.titleElement = document.createElement("div");
    // this.titleElement.className = "titleEl";
    // this.titleElement.textContent = title;
    // document.getElementById("sidebar-content-text").appendChild(this.titleElement);
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
          
                let seed = new Seed(this.map,"assets/images/seedImg2.png", pointlatlngSeed, this.linkArray[i]);
                this.seedArray.push(seed);
            }
          }
          
          appendLinksToSidebar(links) {
            let linkContainer = document.getElementById("sidebar-content-text");
            linkContainer.innerHTML = ""; // Clear the existing links
        
            // Append the title to the sidebar
            const titleElement = document.createElement("div");
            titleElement.classList.add("titleEl"); // Add a class for styling
            titleElement.textContent = this.title;
            linkContainer.appendChild(titleElement);
        
            // Append the links for the current object's axis
            for (const link of links) {
              // Create a container for each link group
              const linkGroup = document.createElement("div");
              linkGroup.classList.add("link-group");
        
              // Create and append the axis title to the link group
              const axisTitleElement = document.createElement("div");
              axisTitleElement.classList.add("axis-title");
              axisTitleElement.textContent = this.title;
              linkGroup.appendChild(axisTitleElement);
        
              // Create <a> tags for each link in the current axis
              const linkElement = document.createElement("a");
              linkElement.style.display = "block";
              linkElement.setAttribute("href", link);
              linkElement.classList.add("mode-prop"); // Add the "mode-prop" class to the <a> tag
              linkElement.textContent = link; // Set the link text as the content of the <a> tag
        
              // Append the link <a> tag to the link group
              linkGroup.appendChild(linkElement);
        
              // Append the link group to the link container
              linkContainer.appendChild(linkGroup);
            }
        
            // Add a separator after the group of links
            const separator = document.createElement("hr");
            linkContainer.appendChild(separator);
          }
          

          
      }