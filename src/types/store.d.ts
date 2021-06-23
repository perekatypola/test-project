interface Character {
  name: string;
  status: string;
  species: string;
}

interface CharacterState {
  data: Character[];
  isFetching: boolean;
}

interface RootState {
  characters: CharacterState;
  episodes: EpisodeState;
  locations: LocationState;
}

interface Action<T> {
  readonly type: string;
  readonly payload?: T;
}

type AsyncAction = import('redux-thunk').ThunkAction<
  void,
  RootState,
  unknown,
  import('redux').AnyAction
>;

interface Episode {
  id: number;
  name: string;
  air_date: string;
}

interface EpisodeState {
  data: Episode[];
  isFetching: boolean;
}

interface Location {
  name: string;
  type: string;
}

interface LocationState {
  data: Location[];
  isFetching: boolean;
}
