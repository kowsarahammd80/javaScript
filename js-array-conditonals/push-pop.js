//push to add number/velu/string in array as the last elements array
var numbers = [78, 45, 98, 45];
 numbers.push(36);
 console.log(numbers);
var friends = ['balam', 'kalam', 'salam'];
friends.push('rohim');// push diyea array er last a elements add kora hoy
friends.push('nilam');
friends.unshift('shuvo');// .unshift diyea array er frist a elements add kora hoy 
console.log(friends);

//use pop to get last element
console.log(numbers);
 numbers.pop();// eibhabe .pop() us korle array er last elemets k bahir kora hoy mane baad dia dea hoy 
 var element = numbers.pop(); // = er por .pop()us korle array er last er elements bahir kora hoy er sathe jeita bahir hoyea che seta k show kora hoy
numbers.shift();// = bade veriable chara ei bhabe bosale shudhu bahirer ta bhir ba baad hobe 
var frist = numbers.shift();// ei bhabe variable bosiayea = er por .shift() korle array jei frist er vellu bahir hobe si show ba dehia dibe
 console.log(numbers);
 console.log(frist);
  console.log(element);