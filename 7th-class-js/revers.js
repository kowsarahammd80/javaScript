function reverseString(text){
  let revers = '';
  for(let i = text.length-1; i >= 0; i--){
    let element = text[i];
    revers = revers + element; 
    console.log(element, revers);
  }
  return revers;
}

let myString = 'i am a good boy';
let reversed = reverseString(myString);
console.log('reversed output:', reversed);