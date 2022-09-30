// function add(number1: number|string, number2:number|string){
//   let result;
//   if(typeof number1==='string' && typeof number2==='string'){
//     result = number1+number2;
//   }
//   if(typeof number1==='string' && typeof number2==='number'){
//     return result=number1+ number2;
//   }
// }
function doST(fn) {
    console.log(fn.description + " " + fn(6));
}
var test = function (someArg) {
    return someArg > 0;
};
test.description = "Mieu ta ne ";
doST(test);
