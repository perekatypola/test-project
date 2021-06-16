import CHARACTER_ACTIONS from './constants';

export const fetchCharactersSuccess = (characters: any) => ({
  type: CHARACTER_ACTIONS.FETCH_CHARACTERS_SUCCESS,
  characters,
});

export const fetchCharactersFailure = () => ({
  type: CHARACTER_ACTIONS.FETCH_CHARACTERS_FAILURE,
});

export const fetchCharactersRequest = () => ({
  type: CHARACTER_ACTIONS.FETCH_CHARACTERS_REQUEST,
});
