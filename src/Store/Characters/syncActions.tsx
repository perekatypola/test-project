import {CHARACTER_ACTIONS} from 'Constants/actions';

export function fetchCharacters(characters: any) {
  return {
    type: CHARACTER_ACTIONS.FETCH_CHARACTERS_SUCCESS,
    characters,
  };
}

export function errorOccured(error: any) {
  return {
    type: CHARACTER_ACTIONS.FETCH_CHARACTERS_FAILURE,
    error,
  };
}
