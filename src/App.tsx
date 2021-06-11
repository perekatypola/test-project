import React from 'react';
<<<<<<< HEAD
import type {FC} from 'react';
import {Provider} from 'react-redux';
import Navigator from './containers/Navigation/MainNavigator';
import api from './axios/axios';

import {store} from './redux/store';

api.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

const App: FC = () => (
  <Provider store={store}>
=======
import {SafeAreaView} from 'react-native';
import Navigator from './Navigation';

const App: React.FC = () => (
  <SafeAreaView>
>>>>>>> config
    <Navigator />
  </Provider>
);

export default App;
