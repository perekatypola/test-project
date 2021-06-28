import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'containers/screens/home';
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
          options={{title: t('description.Home')}}
        />
        <Stack.Screen name={SCREENS.TABS} component={TabsNavigation} />
        <Stack.Screen name={SCREENS.LANGUAGES} component={Languages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
