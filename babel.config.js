module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          Constants: './src/Constants',
          Screens: './src/Containers/Screens',
          Navigation: './src/Containers/Navigation',
          Store: './src/Store',
          Interfaces: './src/Interfaces',
          Configs: './src/Configs',
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
