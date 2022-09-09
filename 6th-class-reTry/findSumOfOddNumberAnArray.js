
function getSumAnArray(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    let index = i;
    let element = numbers[index];
    sum = sum + element
    // console.log(index, element, sum);
  }
  return sum;

}


/// get odd numbers sum or array
function getOddNumbersOfArray(numbers){
  let oddNumber = [];
  for(let i = 0; i < numbers.length; i++){
    let index = i;
    let element = numbers[index];
    
    if(element % 2 !== 0){
      console.log(index, element);
      oddNumber.push(element);
    }
   
  }
  return oddNumber;
}

let myNumber = [12, 65, 45, 78, 32, 45, 91];
let oddNumbers = getOddNumbersOfArray(myNumber);
console.log(oddNumbers);

let oddNumberSum = getSumAnArray(oddNumbers);
console.log(oddNumberSum);