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
        <Stack.Screen name={SCREENS.TABS} component={TabsNavigation} />
        <Stack.Screen name={SCREENS.LANGUAGES} component={Languages} />
        <Stack.Screen name={SCREENS.CHARACTER_ITEM} component={CharacterInfo} />
        <Stack.Screen name={SCREENS.EPISODE_ITEM} component={EpisodeInfo} />
        <Stack.Screen name={SCREENS.LOCATION_ITEM} component={LocationInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
