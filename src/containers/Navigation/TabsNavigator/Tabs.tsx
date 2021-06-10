import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../../Screens/Characters';
import LocationsScreen from '../../Screens/Locations';
import Episodes from '../../Screens/Episodes';
import screens from '../../../сonstants/screens';

const Tab = createBottomTabNavigator();

const TabsNavigation: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={screens.CHARACTERS}
      component={Characters}
      options={{title: 'Characters'}}
    />
    <Tab.Screen
      name={screens.LOCATIONS}
      component={LocationsScreen}
      options={{title: 'Locations'}}
    />
    <Tab.Screen
      name={screens.EPISODES}
      component={Episodes}
      options={{title: 'Episodes'}}
    />
  </Tab.Navigator>
);

export default TabsNavigation;
