import EPISODES_ACTIONS from './constants';

const initialState = {
  data: [],
  isFetching: false,
};

export const episodesReducer = (
  state = initialState,
  {type, payload = {}}: Action<Partial<EpisodeState>>,
): EpisodeState => {
  console.log(payload);
  switch (type) {
    case EPISODES_ACTIONS.FETCH_EPISODES_SUCCESS: {
      return {...state, data: payload.data ?? [], isFetching: false};
    }
    case EPISODES_ACTIONS.FETCH_EPISODES_REQUEST: {
      return {...state, isFetching: true};
    }
    case EPISODES_ACTIONS.FETCH_EPISODES_FAILURE: {
      return {...state, isFetching: false};
    }
    default:
      return {...state};
  }
};
