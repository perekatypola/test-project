import {CharacterState} from 'Interfaces/store';

const initCharacterState = {};

export default function charactersReducer(
  state: CharacterState = initCharacterState,
  action,
) {
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
