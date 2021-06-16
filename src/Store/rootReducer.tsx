import {combineReducers} from 'redux';
import {toastReducer as toast} from 'react-native-redux-toast';
import charactersReducer from './Characters';

const rootReducer = combineReducers({
  characters: charactersReducer,
  toast,
});

export default rootReducer;
