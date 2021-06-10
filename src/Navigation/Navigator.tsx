import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import screens from '../Constants/ScreenConstants';

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name={screens.HOME} component={Home} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigator;
