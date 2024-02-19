
// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

const inventory = require('./data')

function BMWAndAudi(data){
    let audiAndBmw=[]
    for(let index=0; index<data.length; index++){
        if(data[index].car_make.toLowerCase()==="bmw" || data[index].car_make.toLowerCase()==="audi"){
             audiAndBmw.push(data[index])
        }
    }
    return JSON.stringify(audiAndBmw);

}
module.exports=BMWAndAudi;