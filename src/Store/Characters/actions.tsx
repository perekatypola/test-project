import CHARACTER_ACTIONS from './constants';

export function fetchCharacters(characters: any) {
  return {
    type: CHARACTER_ACTIONS.FETCH_CHARACTERS_SUCCESS,
    characters,
  };
}

export function isError(error: any) {
  return {
    type: CHARACTER_ACTIONS.FETCH_CHARACTERS_FAILURE,
    error,
  };
}

export function isFetching() {
  return {
    type: CHARACTER_ACTIONS.FETCH_CHARACTERS_REQUEST,
  };
}
