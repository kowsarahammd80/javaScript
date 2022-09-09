//1
function bar(){
  console.log('bar');
}
function foo(){
  console.log('foo');
  bar();
}
foo();

//2
function avg(num1, num2, num3){
    var avg = num1 + num2 + num3;
    var devaging = avg / 3;
    // console.log(devaging);
    return devaging;
}
var lestAmount = avg(30, 40, 50);
console.log(lestAmount);

//3
function make_avg(array, length){
  let sum = 0;

  for(let i= 0; i < length; i++){
    
    sum = sum + array[i];
    console.log(sum / length);
    return;
  }
  

}

let array = [1,2,6,5,9,4,5,4];
let length = 8;

make_avg(array,length);


//5
var color = 'green'

switch(color){
   case 'red':
    console.log('red');
     break;
  case 'green':
   console.log('green');
    break;
  default:
    console.log('yellow');
}





function odd_even(value){
  if(value%2 == 0){
    console.log('even')
    return;
    
  }
  else{
    console.log('odd')
    return;
  }
}

odd_even(6);