module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          Navigation: './src/Navigation',
          Constants: './src/Constants',
          Screens: './src/Screens',
        },
      },
    ],
  ],
};
