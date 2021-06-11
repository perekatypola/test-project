import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'containers/Screens/Home';
import TabsNavigation from '../TabsNavigator';
import screens from 'сonstants/screens';

const Stack = createStackNavigator();

const Navigator: FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={screens.HOME}
        component={Home}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Rick and Morty" component={TabsNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
