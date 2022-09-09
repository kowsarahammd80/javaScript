// slice
let friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

let partial = friends.slice(2, 5);
console.log(partial);
console.log(friends);

//splice er maddome array theke elements sorano jay er sathe add o kora jay middel theke o kora jay 

let friend = [12, 45, 32, 22, 44, 62, 29, 69, 87];

let partials = friend.splice(2, 5, 70, 20, 100);
console.log(partials);
console.log(friend);

// duplocate.js

let names = ['abul', 'babaul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

function removeDuplicat(names){
   let unique = [];
   for(let i = 0; i < names.length; i++){
     const name = names [i];
     if(unique.includes(name) === false){
       unique.push(name)
     }
   }
   return unique;
  
   
}

let uniqueNames = removeDuplicat(names);
console.log(uniqueNames);

// wood.js

function woodCalculator(chairQantity, tableQuantity, bedQuantity){
  let perChairWood = 3;
  let perTableWood = 10;
  let perBedWood = 50;

  let chairWood = chairQantity * perChairWood;
  let tableWood = tableQuantity * perTableWood;
  let bedWood = bedQuantity * perBedWood;

  // console.log(chairQantity, tableQuantity, bedQuantity);
  let totalWood = chairWood + tableWood + bedWood;
   return totalWood;

}

let totalWood = woodCalculator(2, 2, 5);
// console.log(totalWood);

// chepest 

// let phones = [
//   {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
//   {name: 'Walton', camera: 14, storage: '32gb', price: 22000, color: 'silver' },
//   {name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver' },
//   {name: 'Xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver' },
//   {name: 'Oppo', camera: 13, storage: '32gb', price: 20000, color: 'silver' },
//   {name: 'Nokia', camera: 15, storage: '32gb', price: 44000, color: 'silver' },
//   {name: 'HTC', camera: 16, storage: '32gb', price: 62000, color: 'silver' },
// ];

// function cheapestPhone(phones){
//   let cheapest = phones[0];
//   for(let i = 0; i < phones.length; i++){
//      let phone = phones[i];
//     if(phone.camera < cheapest.camera){
//         cheapest = phone;
//     }
//   }
//   return cheapest;
// }

// let mySelection = cheapestPhone(phones);
// console.log(mySelection); 




let phones = [
  {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
  {name: 'Walton', camera: 14, storage: '32gb', price: 22000, color: 'silver' },
  {name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver' },
  {name: 'Xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver' },
  {name: 'Oppo', camera: 13, storage: '32gb', price: 20000, color: 'silver' },
  {name: 'Nokia', camera: 15, storage: '32gb', price: 44000, color: 'silver' },
  {name: 'HTC', camera: 16, storage: '32gb', price: 62000, color: 'silver' },
];

function lowCamera(phones){
  let cheapestCamera = phones[0];
  for( let i = 0; i < phones.length; i++){
      let phoen = phones [i];
      // console.log(camera);
      if(phoen.camera < cheapestCamera.camera){
         cheapestCamera = phoen;
      }
      
  }
   return cheapestCamera;
}

let lowCameraPhone = lowCamera(phones)
console.log(lowCameraPhone);


simple-cart
let shoppingCart = [
  {name: 'shoe', price: 1200},
  {name: 'shirt', price: 2200},
  {name: 'pant', price: 3700},
  {name: 'belt', price: 600},
];
function totalCost(products){
  let sum = 0;
   for(let i= 0; i < products.length; i++){
     let product = products[i];
      sum = sum + product.price;
    //  console.log(product);
   }
   return sum;
 }

let expense = totalCost(shoppingCart);
 console.log(expense);

// Quantity 

let shoppingCartQantiy = [
  {name: 'shoe', price: 1200 , quantity: 2},
  {name: 'shirt', price: 2200, quantity: 5},
  {name: 'pant', price: 3700, quantity: 4},
  {name: 'belt', price: 600, quantity: 3},
];
function totalCost(products){
  let sum = 0;
   for(let i= 0; i < products.length; i++){
     let product = products[i];
     let productTotal = product.price * product.quantity; 
      sum = sum + productTotal;
      // console.log(product);
   }
   return sum;
}

let expenseQantiy = totalCost(shoppingCartQantiy);
console.log(expenseQantiy);