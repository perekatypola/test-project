import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterScreen from '../Screens/CharacterScreen';
import LocationsScreen from '../Screens/LocationsScreen';
import EpisodesScreen from '../Screens/EpisodesScreen';
import { CHARACTERS, LOCATIONS } from '../Screens/constants';
import { store } from '../redux/store';
import actions from '../redux/actions/actions';

const Tab = createBottomTabNavigator();

const TabsNavigation: React.FC = () => {
  useEffect(() => {
    store.dispatch(actions.addCharactersThunk);
  });

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={CHARACTERS}
        component={CharacterScreen}
        options={{ title: 'Characters' }}
      />
      <Tab.Screen
        name={LOCATIONS}
        component={LocationsScreen}
        options={{ title: 'Locations' }}
      />
      <Tab.Screen
        name="Episodes"
        component={EpisodesScreen}
        options={{ title: 'Episodes' }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
