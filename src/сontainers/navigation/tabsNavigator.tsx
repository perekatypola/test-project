import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from 'сontainers/screens/Characters';
import Locations from 'сontainers/screens/Locations';
import Episodes from 'сontainers/screens/Episodes';
import {SCREENS} from 'сonstants';

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
