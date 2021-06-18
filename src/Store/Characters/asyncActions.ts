import {CharactersResponse} from 'interfaces/responses';
import {RootState} from 'interfaces/store';
import Toast from 'react-native-root-toast';
import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import store from 'store';
import api from 'сonfigs/api';
import {URLS} from 'сonstants';
import {
  fetchCharactersSuccess,
  fetchCharactersRequest,
  fetchCharactersFailure,
} from './actions';

export const fetchCharactersThunk =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: typeof store.dispatch) => {
    try {
      dispatch(fetchCharactersRequest());
      const characters: CharactersResponse = await api.get(URLS.charactersPath);
      dispatch(fetchCharactersSuccess(characters.results));
    } catch (error) {
      dispatch(fetchCharactersFailure());
      Toast.show(error.message);
    }
  };
