import {colors} from '@constants/color';
import * as React from 'react';
import {View} from 'react-native';

interface DividerProps extends React.ComponentProps<typeof View> {
  color?: string;
  marginHorizontal?: number;
  marginVertical?: number;
  height?: number;
  width?: number;
}

export const Divider: React.FC<DividerProps> = ({
  height,
  width,
  marginHorizontal,
  marginVertical,
  color,
  ...props
}) => {
  return (
    <View
      {...props}
      style={[
        {
          height: height || 1,
          width: width,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
          backgroundColor: color || colors.black40,
        },
        props.style,
      ]}
    />
  );
};

export default Divider;
