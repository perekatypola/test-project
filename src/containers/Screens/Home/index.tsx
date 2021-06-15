import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Button, SafeAreaView} from 'react-native';
import SCREENS from 'Constants/screens';
import i18n from '../../../Localization';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Button
            title={t('description.navToTabs')}
            onPress={() => {
              navigation.navigate('Rick and Morty');
            }}
          />
          <Button
            title={t('description.navToLang')}
            onPress={() => {
              navigation.navigate(SCREENS.LANGUAGES);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
