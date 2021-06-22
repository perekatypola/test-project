module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app/constants': './src/constants',
          сontainers: './src/containers',
          store: './src/store',
          configs: './src/configs',
          localization: './src/localization',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        whitelist: 'API_URL',
      },
    ],
  ],
};
