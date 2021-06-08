import React from 'react';
import type {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/reducer';
import Navigator from './Navigation/Navigator';

const store = createStore(rootReducer);

const App: FC = () => (
  <Provider store={store}>
    <SafeAreaView>
      <Navigator />
    </SafeAreaView>
  </Provider>
);

export default App;
