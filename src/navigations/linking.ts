import {LinkingOptions} from '@react-navigation/native';

export const linking: LinkingOptions<{}> = {
  prefixes: ['naechinso://'],
  config: {
    screens: {
      Recommend: {
        screens: {
          Intro: 'recommend',
        },
      },
    },
  },
};
