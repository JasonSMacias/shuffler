// function to create a deck of cards with default parameters for a traditional 52 card deck plus jokers
let standardDeckPlusJokers = {
  standardSuits: ['S', 'H', 'D', 'C'],
  irregularSuits: {},
  values: {pipStart: 2, pipEnd: 10, specials: ['A', 'J', 'Q', 'K']},
  specialCards: ['J', 'j']
};

exports.createDeck = (suits = standardDeckPlusJokers) => {
  const deck = [];
  for (let i = 0; i < suits.standardSuits.length; i++) {
    // feed standard suit pip cards into deck
    for (let j = suits.values.pipStart; j < suits.values.pipEnd +1; j++) {
      deck.push(j + ' of ' + suits.standardSuits[i]);
    };
    // feed standard face cards into deck
    for (let x of suits.values.specials) {
      deck.push (x +' of ' + suits.standardSuits[i]);
    }
  }
  // feed special cards into deck
  for (let x of suits.specialCards) {
    deck.push (x);
  }
  //  ******** Need to add loop to feed in irregular suits into deck, taking tarot deck as example

  return deck;
};