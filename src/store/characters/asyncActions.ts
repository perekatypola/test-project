import {CharactersResponse} from 'types/responses';
import Toast from 'react-native-root-toast';
import {URLS} from '@app/constants';
import store from 'store';
import api from 'configs/api';

import {
  fetchCharactersSuccess,
  fetchCharactersRequest,
  fetchCharactersFailure,
} from './actions';

export const fetchCharactersThunk =
  (): AsyncAction => async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(fetchCharactersRequest());
      const characters: CharactersResponse = await api.get(URLS.charactersPath);
      dispatch(fetchCharactersSuccess(characters.results));
    } catch (error) {
      dispatch(fetchCharactersFailure());
      Toast.show(error.message);
    }
  };
