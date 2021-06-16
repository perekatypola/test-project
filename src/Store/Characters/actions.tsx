import CHARACTER_ACTIONS from './constants';

export function fetchCharacters(characters: any) {
  return {
    type: CHARACTER_ACTIONS.FETCH_CHARACTERS_SUCCESS,
    characters,
  };
}

export function isError() {
  return {
    type: CHARACTER_ACTIONS.FETCH_CHARACTERS_FAILURE,
  };
}

export function isFetching() {
  return {
    type: CHARACTER_ACTIONS.FETCH_CHARACTERS_REQUEST,
  };
}
