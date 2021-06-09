import React from 'react';
import type {FC} from 'react';
import {Provider} from 'react-redux';
import Navigator from './Navigation/Navigator';
import {store} from './redux/store';

const App: FC = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
