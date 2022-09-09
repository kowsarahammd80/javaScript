let userName = 'blackPink';
let userInput = 'blackpinK';

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase())
// toLowerCase() hocche variable er string k sob choto hater lekha kore dey
// toUperCase() hocche variable ar string k sob boro hater kore dey;

// toLocaleLowerCase() hocche country onujai hela choto korbe;
// to.LocaleUperCase() hocche cuntry onujai lekha boro kore dey;

if(userName.toLowerCase() === userInput.toLowerCase()){
  console.log('valid user');
}
else{
  console.log('invalid user');
}
