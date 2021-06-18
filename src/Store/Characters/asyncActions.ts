import {CharactersResponse} from 'types/responses';
import Toast from 'react-native-root-toast';
import {asyncAction} from 'types/store';
import store from 'store';
import api from 'сonfigs/api';
import {URLS} from 'сonstants';
import {
  fetchCharactersSuccess,
  fetchCharactersRequest,
  fetchCharactersFailure,
} from './actions';

export const fetchCharactersThunk =
  (): asyncAction => async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(fetchCharactersRequest());
      const characters: CharactersResponse = await api.get(URLS.charactersPath);
      dispatch(fetchCharactersSuccess(characters.results));
    } catch (error) {
      dispatch(fetchCharactersFailure());
      Toast.show(error.message);
    }
  };
