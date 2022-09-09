function multipicationOfNumbers(number){
  let result = 1;
  for(let i = 1; i <= 7; i++){
    result = result * i;

  }
  return result;
}

const result = multipicationOfNumbers(7);
console.log(result);