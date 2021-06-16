import {CharactersResponse} from 'Interfaces/responses';
import api from 'Configs/api';
import {fetchCharacters} from './syncActions';

export const addCharactersThunk = () => async dispatch => {
  try {
    const characters: CharactersResponse = await api.get('character');
    console.log(characters);
    await dispatch(fetchCharacters(characters.results));
  } catch (error) {
    console.log(error);
  }
};

export const func = () => 1;
