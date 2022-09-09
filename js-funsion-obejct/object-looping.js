// array vas funtion
var shoppigitems = ['books', 'sunglass', 'shoes', 'pen']
var friedsAges = [12, 45, 30, 12];
var friedsAges = {
  rahim: 12,
  samad: 45,
  karim: 30,
  jamal: 12,

}

var shoppigCart = {
  books: 6,
  sunglass: 2,
  keyboard: 2,
  mouse: 2,
  pen: 20,
  bottale: 3, 
}
const keys = Object.keys(shoppigCart);
console.log(keys);
const values = Object.values(shoppigCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'bottale' ]
for(var i= 0; i < keys.length; i++){
   var propertyName = keys[i];
   var propertiesVelue = shoppigCart[propertyName];
  //  console.log(propertyName,propertiesVelue);
}

//for in loop
for(var propertyName in shoppigCart){
  var value = shoppigCart[propertyName];
  console.log(propertyName, value);

}
