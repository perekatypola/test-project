import {CharactersResponse} from 'Interfaces/responses';
import api from 'Configs/api';
import {fetchCharacters, isFetching, isError} from './syncActions';

export const addCharactersThunk = () => async dispatch => {
  try {
    dispatch(isFetching());
    const characters: CharactersResponse = await api.get('character');
    await dispatch(fetchCharacters(characters.results));
  } catch (error) {
    dispatch(isError(error));
  }
};

export const func = () => 1;
