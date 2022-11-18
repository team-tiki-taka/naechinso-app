import {LinkingOptions} from '@react-navigation/native';

export const linking: LinkingOptions<{}> = {
  prefixes: ['naechinso://'],
  config: {
    screens: {
      Finish: 'finish',
      Recommend: {
        screens: {
          Intro: 'recommend',
        },
      },
    },
  },
};
