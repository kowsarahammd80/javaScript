let numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//   let number = numbers[i];
//   console.log(number);
// }
// altarnetive away
for (let number of numbers){
   console.log(number)
}

let products=[
  {id: 1, name: 'xiami phone', price: 19000},
  {id: 2, name: 'iphone', price: 100000},
  {id: 3, name: 'mac book air', price: 119000},
  {id: 4, name: 'lenovo laptop', price: 19000},
  {id: 5, name: 'dell laptop', price: 20000},
  {id: 6, name: 'samsung', price: 19000},
  {id: 7, name: 'nokia old', price: 19000},
  {id: 8, name: 'Phone one', price: 19000},
]

// for(let product of products){
//     console.log(product);
// }

function matchedProducts(prducts, search){
  let matched = [];
  for(let product of prducts){
    if(product.name.toLowerCase().includes(search.toLowerCase())){
      matched.push(product);
    }
  }
  return matched;
}
let result = matchedProducts(products, 'phone');
console.log(result);

// quiz

function compare(a, b) {
  if (a == b) {
   return true;
  } else {
   return false;
  }
 }
 const results = compare(15, '45');
 console.log(results);

 // validetion

 function add(num1, num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'please enter a number';
  }
   return num1 + num2;
 }
 console.log(add(12, 10));

 function multipal(num1, num2){
   return num1 * num2;
 }

 let output = multipal(12,10);
 console.log(output);


 // ticket price

 function ticketPrice(ticketQuantity){
   let first100Ret = 100;
   let second100Ret = 90;
   let rest100Ret = 70;
    if(ticketQuantity <= 100){
      let price = ticketQuantity * first100Ret;
      return price;
    }
    else if(ticketQuantity <= 200){
      let first100Price = 100 * first100Ret;
      let restTicketQuantity = ticketQuantity - 100;
      let restTicketPrice = restTicketQuantity * second100Ret;
      let totalPrice = first100Price + restTicketPrice;
      
      return totalPrice;
    }
    else{
       let first100Price = 100 * first100Ret;
       let second100Price = 100 * second100Ret;

       let restTicketQuantity = ticketQuantity - 200;
       let restTicketPrice = restTicketQuantity * rest100Ret;
       let totalCost = first100Price + second100Price + restTicketPrice;
       
       return totalCost;
    }
 }

 console.log(ticketPrice(300));