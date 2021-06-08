import React from 'react';
import Navigator from './Navigation/Navigator';
import type {FC} from 'react';

import {SafeAreaView} from 'react-native';

const App: FC = () => (
  <SafeAreaView>
    <Navigator />
  </SafeAreaView>
);

export default App;
