import React from 'react';
import type {FC} from 'react';
import {Provider} from 'react-redux';
import Navigator from 'Navigation/MainNavigator';
import api from 'Configs/api';

import {store} from './Store';

api.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

const App: FC = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
