import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Character from '../interfaces/character';
import rootReducer from './reducers/reducer';

interface RootStore {
  characters: {
    characters: Character[];
  };
}

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default RootStore;
