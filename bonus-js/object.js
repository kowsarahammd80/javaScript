let nayok = {
  name: 'Sakib khan',
  id: 121,
  adrees: 'movie cinema',
  isSingle: true,
  friends:['apu', 'razz', 'salman', 'amir'],
  movies:[{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2018}],
  act: function(){
    console.log('aaction like sakib khan')
  },
  car: {
    brand: 'tesla',
    price: 500000,
    made: 2025,
    menufacture:{
      name: 'tesla',
      ceo: 'Elon Mask',
     country: 'USA'
    }
  }
}
// console.log(nayok.car);
console.log(nayok.act);
nayok.act();
