// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

const inventory = require('./data')

function carYears(data){
    if(Array.isArray(data)){
        let listOfCarYear= [ ];
         for(let index = 0; index<data.length; index++){
            listOfCarYear.push(data[index].car_year)
            
         }
         return listOfCarYear;
       }
  }

  module.exports = carYears;