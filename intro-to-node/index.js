var superheroes = require("superheroes");
const supervillains = require('supervillains');

var mySuperHeroName = superheroes.random();
var myVillainName = supervillains.random();

console.log("Hero: " + mySuperHeroName);
console.log("Villain: " + myVillainName);