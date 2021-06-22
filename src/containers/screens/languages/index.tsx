import React from 'react';
import {View, Button, Text, SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18n from 'localization';
import styles from './styles';

const Languages: React.FC = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.text}>
          <Text>{t('description.languageMessage')}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="rus"
              onPress={() => {
                i18n.changeLanguage('ru');
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="en"
              onPress={() => {
                i18n.changeLanguage('en');
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Languages;
