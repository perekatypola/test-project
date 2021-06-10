import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CharacterScreen from '../../Screens/CharacterScreen/CharacterScreen';
import LocationsScreen from '../../Screens/LocationsScreen';
import EpisodesScreen from '../../Screens/EpisodesScreen';
import screens from '../../../сonstants/ScreenConstants';

const Tab = createBottomTabNavigator();

const TabsNavigation: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={screens.CHARACTERS}
      component={CharacterScreen}
      options={{title: 'Characters'}}
    />
    <Tab.Screen
      name={screens.LOCATIONS}
      component={LocationsScreen}
      options={{title: 'Locations'}}
    />
    <Tab.Screen
      name={screens.EPISODES}
      component={EpisodesScreen}
      options={{title: 'Episodes'}}
    />
  </Tab.Navigator>
);

export default TabsNavigation;
