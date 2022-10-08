import {LinkingOptions} from '@react-navigation/native';

export const linking: LinkingOptions<{}> = {
  prefixes: ['naechinso://'],
  config: {
    screens: {
      Main: {
        initialRouteName: 'Root',
        screens: {
          News: 'recommend',
        },
      },
    },
  },
};
