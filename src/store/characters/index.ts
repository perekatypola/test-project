import CHARACTER_ACTIONS from './constants';

const initialState = {
  data: [],
  isFetching: false,
};

export default function charactersReducer(
  state: CharacterState = initialState,
  {type, payload = {}}: Action<Partial<CharacterState>>,
): CharacterState {
  switch (type) {
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_SUCCESS: {
      return {
        ...state,
        data: payload.data ?? [],
        isFetching: false,
      };
    }
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_REQUEST:
      return {...state, isFetching: true};
    case CHARACTER_ACTIONS.FETCH_CHARACTERS_FAILURE:
      return {...state, isFetching: false};
    default:
      return state;
  }
}
