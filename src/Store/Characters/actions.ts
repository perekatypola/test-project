import {CharacterState, Action, Character} from 'types/store';
import CHARACTER_ACTIONS from './constants';

export const fetchCharactersSuccess = (
  characters: Character[],
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
