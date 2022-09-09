// const myInches = 12;
// const myFeet = myInches / 12;

// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log('dada feet',dadaFeet);

// const dadiInches = 60;
// const dadiFeet = dadaInches / 12;
// console.log(dadiFeet);

function inchTOFeet(inches){
        const feet = inches / 12;
        return feet;
}
const dadaInches = 144;
const dadaFeet = inchTOFeet(dadaInches)
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchTOFeet(nanaInches);
console.log(nanaFeet);

function milesToKilometer(miles){
  const kilometer = miles*1.60934;
  return kilometer;
}
const mile = 2;
const totalKilometer = milesToKilometer(mile);
console.log(totalKilometer);