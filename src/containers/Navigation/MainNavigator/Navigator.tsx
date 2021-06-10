import React from 'react';
import type {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../Screens/Home';
import TabsNavigation from '../TabsNavigator/Tabs';
import screens from '../../../сonstants/screens';

const Stack = createStackNavigator();

const Navigator: FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={screens.HOME}
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Rick and Morty" component={TabsNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
