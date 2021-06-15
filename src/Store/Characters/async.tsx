import {CharactersResponse} from 'Interfaces/responses';
import api from 'Configs/api';
import {getCharacters} from './sync';

export const addCharactersThunk = () => async dispatch => {
  try {
    const characters: CharactersResponse = await api.get('character');
    await dispatch(getCharacters(characters.results));
  } catch (error) {
    console.log(error);
  }
};

export const func = () => 1;
