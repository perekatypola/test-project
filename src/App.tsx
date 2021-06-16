import React from 'react';
import {Provider} from 'react-redux';
import Navigator from 'Navigation/MainNavigator';
import {Toast} from 'react-native-redux-toast';
import api from 'Configs/api';
import store from './Store';

api.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

const App: React.FC = () => (
  <Provider store={store}>
    <Navigator />
    <Toast />
  </Provider>
);

export default App;
