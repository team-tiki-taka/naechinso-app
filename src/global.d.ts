import {colors} from '@constants/colors';
import {EdgeInsets} from 'react-native-safe-area-context';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    edgeInsets: EdgeInsets;
  }
}
