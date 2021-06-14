import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Button, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18n from '../../../Localization';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Button
        title="rus"
        onPress={() => {
          i18n.changeLanguage('ru');
        }}>
        RU
      </Button>
      <Button
        title="Rick and Morty"
        onPress={() => {
          navigation.navigate('Rick and Morty');
        }}
      />
      <Text>{t('description.homeName')}</Text>
    </View>
  );
};
export default Home;
