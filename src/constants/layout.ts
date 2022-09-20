import {Dimensions} from 'react-native';
import {checkIsDesktopBrowser} from '../utils/platformUtil';

const windowDimensions = Dimensions.get('window');

export const layout = {
  window: windowDimensions,
  screen: Dimensions.get('screen'),
  isSmallDevice: Dimensions.get('window').width < 375,
  browser: {
    maxWidth: checkIsDesktopBrowser()
      ? windowDimensions.width > 560
        ? 560
        : windowDimensions.width
      : windowDimensions.width,
  },
};

export default layout;
