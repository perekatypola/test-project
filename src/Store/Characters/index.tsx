import {CHARACTER_ACTIONS} from 'Constants/actions';
import {CharacterState} from 'Interfaces/store';

const initCharacterState = {};

export default function charactersReducer(
  state: CharacterState = initCharacterState,
  action,
) {
  switch (action.type) {
    case CHARACTER_ACTIONS.ADD_CHARACTERS: {
      return {...state, characters: action.characters};
    }
    case CHARACTER_ACTIONS.FAILURE:
      return state;
    default:
      return state;
  }
}
