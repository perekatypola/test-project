import {CharacterState} from 'Interfaces/store';
import CHARACTER_ACTIONS from './constants';

const initialState = {
  characters: [],
  isFetching: false,
};

export default function charactersReducer(
  state: CharacterState = initialState,
  action,
) {
  switch (action.type) {
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_SUCCESS: {
      return {...state, characters: action.characters, isFetching: false};
    }
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_REQUEST:
      return {...state, isFetching: true};
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_FAILURE:
      return {...state, isFetching: false};
    default:
      return state;
  }
}
