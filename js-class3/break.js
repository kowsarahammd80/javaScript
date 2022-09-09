for(i = 0; i <= 20; i++){
  console.log(i);
  if(i>5){
    break;
  }
}

var roastGiven = 0;
while(roastGiven < 10){
  roastGiven++;
  console.log('roast den');
  if(roastGiven > 4){
    break;
  }
}



var items =['battale', 'mouse', 'pen', 'pages', 'nootbook'];
for(i= 0; i < items.length; i++){
  var item = items[i]
  if(item == 'pages'){
    break;
  }
  
  
  console.log(item);
}