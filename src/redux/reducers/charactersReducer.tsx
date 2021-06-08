interface ICharacter {
  name: string;
  status: string;
  species: string;
}

const initCharacterState = {list: []};


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
