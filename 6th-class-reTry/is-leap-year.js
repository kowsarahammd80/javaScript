function isLeapyear(year){
  let remainder = year % 4;
  if(remainder === 0){
    return true;
  }
  else{
    return false;
  }
}
let first = 1933;
let firstYear = isLeapyear(first);
console.log(firstYear);
let scend = 1960;
let scendYear = isLeapyear(scend);
console.log(scendYear);