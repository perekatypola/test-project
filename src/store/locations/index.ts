import LOCATIONS_ACTIONS from './constants';

const initialState = {
  data: [],
  isFetching: false,
};

export default function locationsReducer(
  state: LocationState = initialState,
  {type, payload = {}}: Action<Partial<LocationState>>,
): LocationState {
  switch (type) {
    case LOCATIONS_ACTIONS.FETCH_LOCATIONS_SUCCESS: {
      return {
        ...state,
        data: payload.data ?? [],
        isFetching: false,
      };
    }
    case LOCATIONS_ACTIONS.FETCH_LOCATIONS_REQUEST:
      return {...state, isFetching: true};
    case LOCATIONS_ACTIONS.FETCH_LOCATIONS_FAILURE:
      return {...state, isFetching: false};
    default:
      return state;
  }
}
