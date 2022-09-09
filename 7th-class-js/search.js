let lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni';

// let doseExist = lyrics.includes('pakhi');

let searchString = 'Pakhi';
// let doseExist = lyrics.includes(searchString);
let lyricsLower = lyrics.toLowerCase()
// let doseExist = lyricsLower.includes(searchString);
let searchStringLower = searchString.toLowerCase();
let doseExist = lyricsLower.includes(searchStringLower);

// same jinis 
let doseExistOneThink = lyricsLower.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());

// console.log(doseExistOneThink);

// console.log(doseExist);

//-------------------//

//indexOf

console.log(lyrics.indexOf('kaila'));
console.log(lyrics.indexOf('Tumi'));
//
if(lyrics.indexOf('bosonto') !== -1){
  console.log('exsists inside the string');
}
else {
  console.log('cannot find it');
}

// startsWith
console.log(lyrics.startsWith('Tumi'));

//endswith 
let fileName = 'mybiodata.pdf';
let otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));

