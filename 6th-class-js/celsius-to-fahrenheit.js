//celsius to fahrenheit
function cToF(celsius){
  let cTemp = celsius;
  let cToFhar = cTemp * 9 / 5 + 32;
   let masssage = cTemp +'\xB0C is ' + cToFhar +'\xB0F';
  // console.log(masssage)
  return masssage;
}

//fahrenheit to celsius

function fToc(fahrenheit){
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let masssage = fTemp + '\xB0F is '+ fToCel +'\xB0C';
  // console.log(masssage);
  return masssage;
}


let celsiuses = cToF(60);
console.log(celsiuses);

let fahrenheits = fToc(45);
console.log(fahrenheits);
