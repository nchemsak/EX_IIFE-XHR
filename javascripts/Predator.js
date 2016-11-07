'use strict';
var Predator = (function(predator) {
let carnivores;
let herbivores;

  predator.loadCarnivores = function(callbackToInvoke) {
    let loader = new XMLHttpRequest();
    loader.open("GET", "data/carnivores.json");
    loader.send();
    loader.addEventListener("load", function() {
      carnivores = (JSON.parse(this.responseText)).carnivores;
      callbackToInvoke("Carnivores", carnivores);

    });
  };
  predator.loadHerbivores = function(callbackToInvoke) {
    let loader = new XMLHttpRequest();
    loader.open("GET", "data/herbivores.json");
    loader.send();
    loader.addEventListener("load", function() {

      herbivores = (JSON.parse(this.responseText)).herbivores;
      callbackToInvoke("Herbivores", herbivores);
    });
  };
  return predator;
})(Predator || {});
