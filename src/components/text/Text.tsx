import * as React from 'react';
import {useMemo} from 'react';
import {Text as BaseText} from 'react-native';
import {TextStyleProps, useTextStyle} from './useTextStyle';

export interface TextProps
  extends Partial<React.ComponentProps<typeof BaseText>>,
    TextStyleProps {
  maxLength?: number;
}

export function Text({
  typography,
  color,
  center,
  maxLength,
  ...props
}: TextProps) {
  const textStyle = useTextStyle({typography, color, center});
  const children = useMemo(() => {
    if (
      typeof props.children !== 'string' ||
      !maxLength ||
      props.children.length < maxLength
    ) {
      return props.children;
    }
    return `${props.children.substr(0, maxLength)}...`;
  }, [props.children, maxLength]);
  return (
    <BaseText {...props} style={[textStyle, props.style]}>
      {children}
    </BaseText>
  );
}

Text.create = (textProps: TextProps) => {
  return (props: React.ComponentProps<typeof Text>) => {
    return <Text {...textProps} {...props} />;
  };
};

export default Text;
