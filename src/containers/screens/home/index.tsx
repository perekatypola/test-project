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
            title={t('description.discoverRickAndMorty')}
            onPress={() => navigation.navigate(t('description.tabs'))}
          />
          <Button
            title={t('description.changeLanguage')}
            onPress={() => navigation.navigate(t('description.languages'))}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
