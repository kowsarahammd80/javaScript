function isleapyear(year){
  const remainder = year % 4;
  if(remainder === 0){
      return true;
  }
  else{
    return false;
  }


}

const myYear = isleapyear(2022);
console.log('my year', myYear);
const herYear = isleapyear(1960);
console.log('her year',herYear)
