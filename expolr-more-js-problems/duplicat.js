let names = ['abul', 'babaul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

function removeDuplicat(names){
  let unique = [];
  for(let i = 0; i < names.length; i++){
    let name = names[i];
    console.log(name);
    if(unique.includes(name) === false){
      unique.push(name);
    }
  }
  return unique;
}
let uniqueNames = removeDuplicat(names);
console.log(uniqueNames);