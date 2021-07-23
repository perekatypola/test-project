import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'containers/screens/home';
import CharacterInfo from 'containers/screens/characterInfo';
import LocationInfo from 'containers/screens/locationInfo';
import EpisodeInfo from 'containers/screens/episodeInfo';
import Languages from 'containers/screens/languages';
import {SCREENS} from '@app/constants';
import {useTranslation} from 'react-i18next';
import TabsNavigation from './tabsNavigator';

const Stack = createStackNavigator();
const Navigator: FC = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.HOME}
          component={Home}
          options={{title: t('description.home')}}
        />
        <Stack.Screen name={t('description.tabs')} component={TabsNavigation} />
        <Stack.Screen name={t('description.languages')} component={Languages} />
        <Stack.Screen
          name={t('description.characterInfo')}
          component={CharacterInfo}
        />
        <Stack.Screen
          name={t('description.episodeInfo')}
          component={EpisodeInfo}
        />
        <Stack.Screen
          name={t('description.locationInfo')}
          component={LocationInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
