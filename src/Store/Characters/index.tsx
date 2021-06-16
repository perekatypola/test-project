import {CharacterState} from 'Interfaces/store';
import CHARACTER_ACTIONS from './actions';

const initCharacterState = {};

export default function charactersReducer(
  state: CharacterState = initCharacterState,
  action,
) {
  switch (action.type) {
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_SUCCESS: {
      console.log(action.type);
      return {...state, characters: action.characters, isFetching: false};
    }
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_REQUEST:
      return {...state, isFetching: true};
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_FAILURE:
      return state;
    default:
      return state;
  }
}
