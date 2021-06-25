import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '@app/constants';
import Characters from 'containers/screens/characters';
import Locations from 'containers/screens/locations';
import Episodes from 'containers/screens/episodes';

const Tab = createBottomTabNavigator();

const TabsNavigation: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={SCREENS.CHARACTERS}
      component={Characters}
      options={{title: 'Characters'}}
    />
    <Tab.Screen
      name={SCREENS.LOCATIONS}
      component={Locations}
      options={{title: 'Locations'}}
    />
    <Tab.Screen
      name={SCREENS.EPISODES}
      component={Episodes}
      options={{title: 'Episodes'}}
    />
  </Tab.Navigator>
);

export default TabsNavigation;
