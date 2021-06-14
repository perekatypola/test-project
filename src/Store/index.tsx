import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Character} from 'Interfaces/store';
import rootReducer from './rootReducer';

interface RootStore {
  characters: {
    characters: Character[];
  };
}

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default RootStore;
