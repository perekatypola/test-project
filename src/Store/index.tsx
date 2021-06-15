import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {CharacterState} from 'Interfaces/store';
import rootReducer from './rootReducer';

interface RootStore {
  characters: CharacterState;
}

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default RootStore;
