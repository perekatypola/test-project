import React from 'react';
import {Provider} from 'react-redux';
import Navigator from 'Navigation/MainNavigator';
import store from './Store';

const App: React.FC = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
