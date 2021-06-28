import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '@app/constants';
import Characters from 'containers/screens/characters';
import Locations from 'containers/screens/locations';
import Episodes from 'containers/screens/episodes';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const TabsNavigation: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREENS.CHARACTERS}
        component={Characters}
        options={{title: t('description.characters')}}
      />
      <Tab.Screen
        name={SCREENS.LOCATIONS}
        component={Locations}
        options={{title: t('description.locations')}}
      />
      <Tab.Screen
        name={SCREENS.EPISODES}
        component={Episodes}
        options={{title: t('description.episodes')}}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
