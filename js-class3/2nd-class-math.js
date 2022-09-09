var fruits =['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

//greading



// larges numder

var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2){
  if(num1 > num3){
    console.log(num1)
  }
  else{
    console.log(num3);
  }
}
else{
  if(num2 > num3){
    console.log(num2);
  }
  else{
    console.log(num3);
  }
}

//somodi bahu 

var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
  console.log('isosceles');
}
else{
  console.log('no isoseles');
}


// 3rd class exmpol

var num = 1;
while(num <= 10){
  // console.log(num);
  num++;
}
for(var i = 0; i <= 10; i++){
  // console.log(i);
}

for(var i = 0; i <= 10; i++){
  // console.log(i);
  if(i == 5){
    break;
  }
}

 var i = 0;
 for (i=0; i<5; i++){};
//  console.log(i);

var num = 0;
while(num <= 10){
  console.log(num);
  num++;
  if(num > 5){
    break;
  }
}
for(i = 0; i < 10; i++){
  console.log(i);
  if(i > 4){
    break;
  }
}
var items =['Apple', 'orange', 'banana', 'Mango'];
for(var i = 0; i < items.length; i++){
  var item = items[i]
  
  if(item == 'Mango'){
    break;
  }
  console.log(item);
}