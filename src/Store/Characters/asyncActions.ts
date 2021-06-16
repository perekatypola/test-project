import {CharactersResponse} from 'interfaces/responses';
import api from 'сonfigs/api';
import Toast from 'react-native-root-toast';
import {URLS} from 'сonstants';
import {
  fetchCharactersSuccess,
  fetchCharactersRequest,
  fetchCharactersFailure,
} from './actions';

export const fetchCharactersThunk = () => async dispatch => {
  try {
    dispatch(fetchCharactersRequest());
    const characters: CharactersResponse = await api.get(URLS.charactersPath);
    await dispatch(fetchCharactersSuccess(characters.results));
  } catch (error) {
    dispatch(fetchCharactersFailure());
    Toast.show(error.message);
  }
};
