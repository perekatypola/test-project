import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'Screens/Home';
import SCREENS from 'Constants/screens';
import TabsNavigation from './TabsNavigator';

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
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
