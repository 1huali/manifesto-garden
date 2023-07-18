"use strict";
window.onload = (event) => {
var myObjects = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' }
  ];
  
  appendDivsFromArray(myObjects);
  

function appendDivsFromArray(objects) {
    var container = document.getElementById('container');
  
    objects.forEach(function(object) {
      var div = document.createElement('div');
      var titleDiv = document.createElement('div');
      var contentDiv = document.createElement('div');
  
      titleDiv.textContent = object.title;
      contentDiv.textContent = object.content;
  
      div.appendChild(titleDiv);
      div.appendChild(contentDiv);
      container.appendChild(div);
    });
  }
}