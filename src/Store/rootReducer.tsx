import {combineReducers} from 'redux';
import charactersReducer from './Characters';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;
