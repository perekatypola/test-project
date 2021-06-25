import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import EN from '../localization/locales/en.json';
import RU from '../localization/locales/ru.json';

const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
