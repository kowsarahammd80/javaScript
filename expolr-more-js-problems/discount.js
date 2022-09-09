/**
 * 1.if ticket numbers is less then 100, per ticket price: 100
 * 2. if ticket numbers is more then 100, but less then 200, first 100 tickets will be 100/tickets rest tickets will be 90 taka per piece.
 *  first 100 --> 100tk
 *  rest ----> 90tk
 * 3. if you purchese more than 200 tickets 
 * frist 100 ---> 100 taka
 * 101-200 --->90 taka
 * 200+ ---> 70taka
 */
function ticketPrice(ticketQuantity){
  let frist100Rate = 100;
  let second100Rate = 90;
  let restTicketRate = 70;
  if(ticketQuantity <= 100){
     let ticketPrices = ticketQuantity * frist100Rate;
     return ticketPrices;
  }
  else if (ticketQuantity <= 200){
     let first100Price = 100 * 
     frist100Rate;
     let restTicketQuantity = ticketQuantity - 100;
     let restTicketPrice = restTicketQuantity * second100Rate;
     let totalPrice = first100Price + restTicketPrice;
     return totalPrice;
  }
  else{
    let first100Price = 100 * first100Price;
    let second100Rate = 100 * second100Rate;
    let restTicketQuantity = ticketQuantity - 200;
    let restTicketPrice = restTicketQuantity * restTicketRate;
    let totalCost = first100Price + second100Price + restTicketPrice;
    
    return totalCost;
  }
  
 
}

let price = ticketPrice(100);
console.log(price);
