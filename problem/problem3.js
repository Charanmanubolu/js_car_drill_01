// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const inventory = require('../data')
let result=[];
let carModels = inventory.map((Element)=>result.push(Element.car_model))

module.exports = result;


