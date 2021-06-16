import {CHARACTER_ACTIONS} from 'Constants/actions';
import {CharacterState} from 'Interfaces/store';

const initCharacterState = {};

export default function charactersReducer(
  state: CharacterState = initCharacterState,
  action,
) {
  console.log(action);
  switch (action.type) {
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_SUCCESS: {
      return {...state, characters: action.characters};
    }
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_FAILURE:
      return state;
    default:
      return state;
  }
}
