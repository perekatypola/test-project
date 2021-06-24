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
      options={{title: SCREENS.CHARACTERS}}
    />
    <Tab.Screen
      name={SCREENS.LOCATIONS}
      component={Locations}
      options={{title: SCREENS.LOCATIONS}}
    />
    <Tab.Screen
      name={SCREENS.EPISODES}
      component={Episodes}
      options={{title: SCREENS.EPISODES}}
    />
  </Tab.Navigator>
);

export default TabsNavigation;
