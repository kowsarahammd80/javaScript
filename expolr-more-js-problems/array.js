let countery = 'Bangladesh';
let age = '52';
let isIndependent = true;
  let student = {id: 121, class: 11, name: 'Agun'};
let friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
  return num1 + num2;
}

console.log(typeof countery);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));// array item check this away 
console.log(typeof add);

//---includes us kore array er vitorer elements k bahor kora hoy---//
console.log(friends.includes(19));
console.log(friends.includes(21));

//--eita ar ekta item//
if(friends.indexOf(252) !== -1){

}

//concat : 
let newFriends = [12, 13, 11, 14];
let allFriends = newFriends.concat(friends);

console.log(allFriends);