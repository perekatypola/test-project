import React from 'react';
import type {FC} from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import Navigator from './containers/Navigation/MainNavigator/Navigator';
import api from './axios/axios';

import {store} from './redux/store';

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
