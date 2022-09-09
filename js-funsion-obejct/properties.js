// var shoppigCart = {
//   books: 3,
//   sunglass: 1,
//   keyboard: 5,
//   mouse: 1,
//   pen: 25,
// }
// // when you know the specific property nem, use dot notation to get the property value
// var penCount = shoppigCart.pen;
// //alternative system
// //when you know the specific property nem, use dot notation to get the property value
// var penCount2 = shoppigCart['pen'];

// var properties = Object.keys(shoppigCart);
// var propertiesVelue = Object.values(shoppigCart);

// //other system
// var propertyName = 'mouse';

// var propertyValues = shoppigCart[propertyName];
// console.log(propertyName, propertyValues);

// // console.log(properties);
// // console.log(propertiesVelue);

// // console.log(shoppigCart);

// shoppigCart.mouse = 15;
// console.log(shoppigCart);
// shoppigCart['mouse'] = 29;
// console.log(shoppigCart);
// shoppigCart[propertyName] = 89;
// console.log(shoppigCart);


//retry

var shoppigCart = {
  books: 6,
  sunglass: 2,
  keyboard: 2,
  mouse: 2,
  pen: 20, 
}

var penCount = shoppigCart.pen;

var penCount2 = shoppigCart['pen'];

var propertyName = 'keyboard';
var propertiesVelue = shoppigCart[propertyName];
// console.log(propertyName,propertiesVelue);

var properties = Object.keys(shoppigCart);
// console.log(properties);
var value = Object.values(shoppigCart);
// console.log(properties);
// console.log(value);
 console.log(shoppigCart);

 //set velu

 shoppigCart.mouse = 21;
 console.log(shoppigCart);
 shoppigCart['mouse']= 39;
 console.log(shoppigCart);
 shoppigCart[propertyName]= 10;
 console.log(shoppigCart);