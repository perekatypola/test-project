const initCharacterState = {characters: []};

export default function charactersReducer(state = initCharacterState, action) {
  switch (action.type) {
    case 'Add characters': {
      console.log(action);
      return {...state, characters: action.characters};
    }
    case 'Not successful recieving':
      return state;
    default:
      return state;
  }
}
