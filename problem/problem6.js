
// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.


function BMWAndAudi(data){
    let audiAndBmw=[]
    if(Array.isArray(data)){
        data.filter((Element)=>{
            if(Element.car_make.toLowerCase()==='audi' || Element.car_make.toLowerCase()==='bmw'){
                audiAndBmw.push(Element)
            }
        })
    }
    return JSON.stringify(audiAndBmw);

}
module.exports=BMWAndAudi;