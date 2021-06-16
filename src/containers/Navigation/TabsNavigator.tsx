import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from 'Screens/Characters';
import Locations from 'Screens/Locations';
import Episodes from 'Screens/Episodes';
import {SCREENS} from 'Constants';

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
