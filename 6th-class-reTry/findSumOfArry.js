// getsum of array.
function getSumAnArray(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    let index = i;
    let element = numbers[index];
    sum = sum + element
    console.log(index, element, sum);
  }
  return sum;

}

let myNumber = [12, 65, 45, 78, 32, 45, 91];
getSumAnArray(myNumber);