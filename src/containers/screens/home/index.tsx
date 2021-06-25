import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Button, SafeAreaView} from 'react-native';
import {SCREENS} from '@app/constants';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Button
            title={t('description.navigateToTabs')}
            onPress={() => navigation.navigate(SCREENS.RICK_AND_MORTY)}
          />
          <Button
            title={t('description.languageChange')}
            onPress={() => navigation.navigate(SCREENS.LANGUAGES)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
