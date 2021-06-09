import React from 'react';
import type {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CharacterScreen from '../Screens/CharacterScreen';
import LocationsScreen from '../Screens/LocationsScreen';
import EpisodesScreen from '../Screens/EpisodesScreen';
import {CHARACTERS, LOCATIONS} from '../Screens/constants';

const Tab = createBottomTabNavigator();

const TabsNavigation: FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={CHARACTERS}
      component={CharacterScreen}
      options={{title: 'Characters'}}
    />
    <Tab.Screen
      name={LOCATIONS}
      component={LocationsScreen}
      options={{title: 'Locations'}}
    />
    <Tab.Screen
      name="Episodes"
      component={EpisodesScreen}
      options={{title: 'Episodes'}}
    />
  </Tab.Navigator>
);

export default TabsNavigation;
