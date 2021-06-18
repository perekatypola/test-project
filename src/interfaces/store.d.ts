export interface Character {
  name: string;
  status: string;
  species: string;
}

export interface CharacterState {
  characters: Character[];
  isFetching: boolean;
}

export interface RootState {
  characters: CharacterState;
}

export interface Action<T> {
  readonly type: string;
  readonly payload?: T;
}
