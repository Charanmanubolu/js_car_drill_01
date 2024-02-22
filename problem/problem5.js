// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.


const resultCarYear=require("../test/testproblem4")

let result = resultCarYear.filter((Element)=>{
    return Element<=2000;
})

module.exports=result;