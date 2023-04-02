// Create a closure which has one inner function

const findLength = function(a,b){
   var range = [a,b] 
   const myFun = function(){
    return  range[1] - range[0]
   }
   return `Range for coordinates (${a},${b}) is ${myFun()}`
}

console.log(findLength(-2,2))