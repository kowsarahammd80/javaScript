function add(num1, num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'please enter a number';
  }
  return num1 + num2;
}

let result = add(12, 45);
// console.log(result);

function multiply(num1, num2){
  return num1 * num2;
}

let output = multiply(12,45);
console.log(output);
