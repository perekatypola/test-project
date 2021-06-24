import api from 'configs/api';
import {URLS} from '@app/constants';
import Toast from 'react-native-root-toast';
import {
  fetchLocationsFailure,
  fetchLocationsRequest,
  fetchLocationsSuccess,
} from './actions';

export const fetchLocationsThunk = (): AsyncAction => async dispatch => {
  try {
    dispatch(fetchLocationsRequest());
    const locations: LocationsResponse = await api.get(URLS.LOCATION);
    dispatch(fetchLocationsSuccess(locations.results));
  } catch (error) {
    dispatch(fetchLocationsFailure());
    Toast.show(error.message);
  }
};
