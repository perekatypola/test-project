import {combineReducers} from 'redux';
import charactersReducer from './characters';
import {episodesReducer} from './episodes';
import locationsReducer from './locations';

const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  locations: locationsReducer,
});

export default rootReducer;
