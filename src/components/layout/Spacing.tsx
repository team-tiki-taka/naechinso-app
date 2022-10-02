import React from 'react';
import {View, ViewStyle} from 'react-native';

type Props = (
  | {
      width: number;
    }
  | {height: number}
  | {width: number; height: number}
  | {flex: number}
) &
  React.ComponentProps<typeof View>;

export function Spacing(props: Props) {
  const style = useSpacingStyle(props);
  return <View {...props} style={[props.style, style]} />;
}

function useSpacingStyle(props: Props) {
  const style: ViewStyle = {};
  if ('width' in props) {
    style.width = props.width;
  }
  if ('height' in props) {
    style.height = props.height;
  }
  if ('flex' in props) {
    style.flex = props.flex;
  }
  return style;
}
