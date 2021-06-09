import React from 'react';
import type {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/reducer';
import Navigator from './Navigation/Navigator';
import HomeScreen from './Screens/HomeScreen';

const store = createStore(rootReducer);

const App: FC = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
