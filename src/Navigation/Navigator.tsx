import React from 'react';
import type {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import TabsNavigation from './TabsNavigation';
import {HOME} from '../Screens/constants';

const Stack = createStackNavigator();

const Navigator: FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Rick and Morty" component={TabsNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
