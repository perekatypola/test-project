import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'containers/screens/home';
import MemorizedCharacterInfo from 'containers/screens/characterInfo';
import Languages from 'containers/screens/languages';
import {SCREENS} from '@app/constants';
import {useTranslation} from 'react-i18next';
import TabsNavigation from './tabsNavigator';

const Stack = createStackNavigator();

const Navigator: FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{title: 'Home'}}
      />
      <Stack.Screen name={SCREENS.TABS} component={TabsNavigation} />
      <Stack.Screen name={SCREENS.LANGUAGES} component={Languages} />
      <Stack.Screen
        name={SCREENS.CHARACTER_ITEM}
        component={MemorizedCharacterInfo}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
