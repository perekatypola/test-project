import {CharactersResponse} from 'Interfaces/responses';
import api from 'Configs/api';
import Toast from 'react-native-root-toast';
import {fetchCharacters, isFetching, isError} from './actions';

export const addCharactersThunk = () => async dispatch => {
  try {
    dispatch(isFetching());
    const characters: CharactersResponse = await api.get('character');
    await dispatch(fetchCharacters(characters.results));
  } catch (error) {
    const toast = Toast.show('This is a message', {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    dispatch(isError());
  }
};

export const func = () => 1;
