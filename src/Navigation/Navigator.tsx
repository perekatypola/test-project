import React from 'react';
import type {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import CharacterScreen from '../Screens/CharacterScreen';
import {HOME, CHARACTERS} from '../Screens/constants';

const Tab = createBottomTabNavigator();

const Navigator: FC = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={CHARACTERS} component={CharacterScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigator;
