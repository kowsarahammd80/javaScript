function isEven(number){
  let remainder = number % 2;
   if(remainder === 0){
     return true;
   }
   else{
     return false;
   }

} 

let first = 303;
let firstNum = isEven(303);
console.log(firstNum);
let scend = 404;
let scendNmu = isEven(scend);
console.log(scendNmu);