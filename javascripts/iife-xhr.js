'use strict';

function show1(x, car) {
  let carn = document.getElementById("carn");
  carn.innerHTML += "<h2>" + x + "</h2>";
  car.forEach(function(item) {
    carn.innerHTML += "<li>" + item + "</li>";
  });
}

function show2(y, her) {
  let herb = document.getElementById("herb");
  herb.innerHTML += "<h2>" + y + "</h2>";
  her.forEach(function(item) {
    herb.innerHTML += "<li>" + item + "</li>";
  });
}

Predator.loadCarnivores(show1);
Predator.loadHerbivores(show2);
