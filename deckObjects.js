const standardDeckPlusJokers = {
  standardSuits: ['S', 'H', 'D', 'C'],
  irregularSuits: {},
  values: {pipStart: 2, pipEnd: 10, specials: ['A', 'J', 'Q', 'K']},
  specialCards: ['J', 'j']
};

const frenchTarotDeck = {
  standardSuits: ['S', 'H', 'D', 'C'],
  irregularSuits: {
    T: {pipStart: 1, pipEnd: 21, specials: ['Excuse']}
    },
  values: {pipStart: 1, pipEnd: 10, specials: ['V', 'C', 'D', 'R']},
  specialCards: []
};

// Others to create: Rook, Spanish, etc.