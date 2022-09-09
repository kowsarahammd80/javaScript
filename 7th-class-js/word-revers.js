function reversWords(str){
  let words = str.split(' ');
  let result = [];
  for(let i = words.length -1; i >= 0; i--){
    let element = words[i];
    result.push(element);
     
  }
  let reversed = result.join(' ');
  return reversed;


}

let myString = 'i am a good boy';
let reverseString = reversWords(myString);
console.log(reverseString);
