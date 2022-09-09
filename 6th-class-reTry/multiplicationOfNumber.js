// fectorial type 9!= 9*8*7*6*5*4*3*2*1

function multiplicationOfnumbes(number){
  let result = 1;
  for( let i = 1; i <= number; i++){
    result = result * i;

  }
  return result;
}

let resultes = multiplicationOfnumbes(9);
console.log(resultes);