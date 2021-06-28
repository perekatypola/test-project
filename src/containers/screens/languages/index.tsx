import React from 'react';
import {View, Button, Text, SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18n from 'configs/i18n';
import {LANGUAGES} from '@app/constants';
import styles from './styles';

const Languages: React.FC = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text>{t('description.languageMessage')}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title={t('description.rus')}
              onPress={() => i18n.changeLanguage(LANGUAGES.ru)}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={t('description.en')}
              onPress={() => i18n.changeLanguage(LANGUAGES.en)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Languages;
