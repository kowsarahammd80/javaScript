/**
 * fixed: par item wood requirements
 * 1. chair --> 3 cft
 * 2. table --> 10 cft
 * 3. bed --> 50 cft
 * vary: quantity
 */

function wooCalculator(chairQuantity, tableQantity, bedQuantity){
  let perChairWood = 3;
  let perTableWood = 10;
  let perBedWood = 50;

  let chairWood = chairQuantity * perChairWood;
  let tableWood = tableQantity * perTableWood;
  let bedWood = bedQuantity * perBedWood;
  // console.log(chairQuantity, tableQantity, bedQuantity);
  let totalWood = chairWood + tableWood + bedWood;
  return totalWood;  
}

let totalWood = wooCalculator(2, 2, 5);
console.log(totalWood);