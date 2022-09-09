function factorial(number){
  let i = number;
  result = 1;
  while(i>=1){
    result = result * i;
    i--;
  }
  return result
}

const output = factorial(2);
console.log(output);
