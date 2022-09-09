function maxInArray(numbers){
  let largest = numbers[0]
 for(let i= 0; i <numbers.length; i++){
  let index = i;
  let element = numbers[index];
  if(element > largest){
     largest = element;
  }
 }
 return largest;
}

let heights = [167, 190, 120, 165, 137, 256];
let tallest = maxInArray(heights);
console.log('tallest person is: ',tallest);

// home work: write a funtion to get the lowest number in array
