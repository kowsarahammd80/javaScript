let result = Math.pow(3, 8);
console.log(result);

let num1 = 25;
let num2 = 45;

let gap = Math.abs(num1 - num2);// Math.abs() er maddome biog fol - hoy kina ta dhore na
if(gap < 5){
  console.log('you can be friends');
}
else {
  console.log('you guys stay apart');
}

///-------------/

//-------/
let number = 2.451245;
let fullNumber = Math.round(number);// Math.round()er maddhome variable er velu k round fegar a dekhay..
// console.log(fullNumber);

let result1 =Math.ceil(2.00001);
console.log(result1);
let result2 =Math.floor(456.259);
console.log(result2);

/// rendom

// console.log(Math.random()); // er madhome rendom number dekhay 

// let rendom = Math.random()*100;
// let rendom = Math.round(Math.random()*100);
// console.log(rendom);

for(let i = 0; i < 20; i++){
   let random = Math.round(Math.random()*6);
   console.log(random);
}

