import {CharacterState, Action} from 'interfaces/store';
import CHARACTER_ACTIONS from './constants';

export const fetchCharactersSuccess = (
  characters: [],
): Action<Partial<CharacterState>> => ({
  type: CHARACTER_ACTIONS.FETCH_CHARACTERS_SUCCESS,
  payload: {characters},
});

export const fetchCharactersFailure = (): Action<Partial<CharacterState>> => ({
  type: CHARACTER_ACTIONS.FETCH_CHARACTERS_FAILURE,
});

export const fetchCharactersRequest = (): Action<Partial<CharacterState>> => ({
  type: CHARACTER_ACTIONS.FETCH_CHARACTERS_REQUEST,
});
