let lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni';
let parts = lyrics.split(' ')// ekhane split a space diyea sentense bhangga hoise aita array akare dekhay 

let sentense = lyrics.split('.')// ekhane split a don diyea sentence er don onujai sentence bhangga hoise

let charctaers = lyrics.split('')// a khane a split a just string us kore string er cherectar onujai sob gula k alaga kora hoy 
// console.log(sentense);

let partial = lyrics.slice(5, 8);// slice er madhhome index er number diyea array ba stiring k kata hoy 
console.log(partial);

let partial2 = lyrics.substring(5, 8);// slice er altarnativ kaj kore
console.log(partial2);


// .join() er maddhome array er lin/ array er valu k join kora hoy
let lines = [
  'Tumi bondhu kala pakhi ami jeno ki',
  'Bosonto kale tomay bolte pari ni'
]

let newSong = lines.join('. ');

console.log(newSong);


