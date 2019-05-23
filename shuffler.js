// function to create a deck of cards with default parameters for a traditional 52 card deck
let standardDeckPlusJokers = {
  standardSuits: {number: 4, values: ['S', 'H', 'D', 'C']},
  irregularSuits: false,
  values: {pipStart: 2, pipEnd: 10, specials: ['A', 'J', 'Q', 'K']},
  specialCards: ['J', 'j']
};

exports.createDeck = (suits = standardDeckPlusJokers) => {
  const deck = [];
  for (let i = 0; i < suits.standardSuits.number; i++) {
    for (let x of suits.standardSuits.values) {
      
    }
  }
  
}