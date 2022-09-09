function add(number1, number2){
  console.log(number1,number2);
  var sum = number1 + number2;
  // console.log(sum);
  return sum;

}

// add(45, 15);
var total = add(80, 20);
console.log('total',total);


function bringSingara(money){
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  // console.log(quantity);
  return quantity;
}
// bringSingara(200)
var myTaka = 200;
// var singara = bringSingara(200);
var singara = bringSingara(myTaka);
console.log('eting singara',singara);


function getAverage (assignment1, assignment2, assignment3){
  const total = assignment1 + assignment2+ assignment3;
  const average = total / 3;
  //  console.log(average);
  return average;
}
// getAverage(57,60,60)

const assignment1Marks = 57;
const assignment2Marks = 60;
const assignment3Marks = 60;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks)
console.log('my average so far',myAverage);