import React from 'react';
import type {FC} from 'react';
import {SafeAreaView} from 'react-native';
import Navigator from './Navigation/Navigator';

const App: FC = () => (
  <SafeAreaView>
    <Navigator />
  </SafeAreaView>
);

export default App;
