import ICharacter from './characterInterface';

interface RootStore {
  characters: ICharacter[];
  episodes: [];
  locations: [];
}

export default RootStore;
