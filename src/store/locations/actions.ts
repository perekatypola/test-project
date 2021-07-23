import LOCATIONS_ACTIONS from './constants';

export const fetchLocationsSuccess = (
  locations: Location[],
): Action<Partial<LocationState>> => ({
  type: LOCATIONS_ACTIONS.FETCH_LOCATIONS_SUCCESS,
  payload: {data: locations},
});

export const fetchLocationsRequest = (): Action<Partial<LocationState>> => ({
  type: LOCATIONS_ACTIONS.FETCH_LOCATIONS_REQUEST,
});

export const fetchLocationsFailure = (): Action<Partial<LocationState>> => ({
  type: LOCATIONS_ACTIONS.FETCH_LOCATIONS_FAILURE,
});
