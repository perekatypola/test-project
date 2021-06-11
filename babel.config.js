module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          constants: ['./src/constants'],
          Screens: ['./src/containers'],
          Navigation: ['./src/containers/Navigation'],
          redux: ['./src/redux'],
          components: ['./src/components'],
          interfaces: ['./src/interfaces'],
        },
      },
    ],
  ],
};
