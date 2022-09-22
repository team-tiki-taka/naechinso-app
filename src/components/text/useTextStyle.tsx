import {ComponentProps, useMemo} from 'react';
import {Text, TextStyle} from 'react-native';
import colors from '../../constants/color';

export const DEFAULT_TEXT_WEIGHT = 'regular';
export const DEFAULT_TEXT_COLOR = colors.black;

enum Typography {
  Headline_1_B = 'Headline/1_B',
  Subtitle_1_B = 'Subtitle/1_B',
  Subtitle_2_M = 'Subtitle/2_M',
  Caption_1_M = 'Caption/1_M',
  Caption_2_M = 'Caption/2_M',
  Caption_3_M = 'Caption/3_M',
}

export interface TextStyleProps {
  typography: Typography;
  color?: string;
  center?: boolean;
}

const STYLE_BY_TYPOGRAPHY: Record<Typography, TextStyle> = {
  [Typography.Headline_1_B]: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 34,
  },
  [Typography.Subtitle_1_B]: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
  [Typography.Subtitle_2_M]: {
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 26,
  },
  [Typography.Caption_1_M]: {
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  [Typography.Caption_2_M]: {
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
  },
  [Typography.Caption_3_M]: {
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
  },
};

export function useTextStyle(
  props: TextStyleProps,
): ComponentProps<typeof Text>['style'] {
  return useMemo(() => {
    const styles = STYLE_BY_TYPOGRAPHY[props.typography];
    const color = props.color ?? DEFAULT_TEXT_COLOR;
    const textAlign = props.center ? 'center' : undefined;
    return {
      ...styles,
      color,
      textAlign,
    };
  }, [props.color, props.center]);
}
