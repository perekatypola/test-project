import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ICharacter from './characterInterface';
import rootReducer from './reducers/reducer';

interface RootStore {
  characters: {
    characters: ICharacter[];
  };
}

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default RootStore;
