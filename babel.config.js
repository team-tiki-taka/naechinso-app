module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@atoms': './src/atoms',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@remotes': './src/remotes',
          '@constants': './src/constants',
          '@icons': './src/icons',
          '@models': './src/models',
          '@navigations': './src/navigations',
          '@svgs': './src/svgs',
          '@utils': './src/utils',
          '@store': './src/store',
          '@hocs': './src/hocs',
          '@contexts': './src/contexts',
        },
      },
    ],
  ],
};
