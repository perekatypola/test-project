import React from 'react';
import type {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import CharacterScreen from '../Screens/CharacterScreen';

const Tab = createBottomTabNavigator();

const Navigator: FC = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Characters" component={CharacterScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigator;
