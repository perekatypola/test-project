import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import axios from 'axios';
import App from './src/App';
import {name as appName} from './app.json';

axios.interceptors.request.use(
  request => request,
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response.results,
  error => Promise.reject(error),
);

AppRegistry.registerComponent(appName, () => App);
