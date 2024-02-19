// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const inventory = require('./data')

function carModels(data){
    if(Array.isArray(data)){
        let listOfCarModels= [ ];
         for(let index = 0; index<data.length; index++){
            listOfCarModels.push(data[index].car_model)
            
         }
         return listOfCarModels.sort();
       }
  }

  module.exports = carModels;


