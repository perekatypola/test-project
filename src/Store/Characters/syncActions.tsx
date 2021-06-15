import {CHARACTER_ACTIONS} from 'Constants/actions';

export function getCharacters(characters: any) {
  return {
    type: CHARACTER_ACTIONS.ADD_CHARACTERS,
    characters,
  };
}

export function errorOccured(error: any) {
  return {
    type: CHARACTER_ACTIONS.FAILURE,
    error,
  };
}
