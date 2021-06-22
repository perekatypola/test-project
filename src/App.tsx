import React from 'react';
import {Provider} from 'react-redux';
import Navigator from 'containers/navigation/mainNavigator';
import {I18nextProvider} from 'react-i18next';
import i18n from 'localization';
import store from 'store';
import 'configs/api';

const App: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </I18nextProvider>
);

export default App;
