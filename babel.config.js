module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
<<<<<<< HEAD
          constants: ['./src/constants'],
          Screens: ['./src/containers'],
          Navigation: ['./src/containers/Navigation'],
          redux: ['./src/redux'],
          components: ['./src/components'],
          interfaces: ['./src/interfaces'],
=======
          Navigation: './src/Navigation',
          Constants: './src/Constants',
          Screens: './src/Screens',
>>>>>>> config
        },
      },
    ],
  ],
};
