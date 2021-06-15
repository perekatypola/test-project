import {CHARACTER_ACTIONS} from 'Constants/actions';

export function getCharacters(characters: any) {
  return {
    type: CHARACTER_ACTIONS.ADDCHARACTERS,
    characters,
  };
}

export function errorOccured(error: any) {
  return {
    type: CHARACTER_ACTIONS.FAILURE,
    error,
  };
}
