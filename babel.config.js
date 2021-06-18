module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app/constants': './src/constants',
          screens: './src/containers/screens',
          navigation: './src/containers/navigation',
          store: './src/store',
          interfaces: './src/interfaces',
          configs: './src/configs',
          types: './src/types',
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
