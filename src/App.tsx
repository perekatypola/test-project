import React from 'react';
import {Provider} from 'react-redux';
import Navigator from 'containers/navigation/mainNavigator';
import store from './store';
import 'configs/api';

const App: React.FC = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
