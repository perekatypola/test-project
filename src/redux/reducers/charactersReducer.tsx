const initCharacterState = {characters: []};

export default function charactersReducer(state = initCharacterState, action) {
  switch (action.type) {
    case 'Add characters':
      return [...state.characters, action.payload];
    case 'Not successful recieving':
      return state;
    default:
      return state;
  }
}
