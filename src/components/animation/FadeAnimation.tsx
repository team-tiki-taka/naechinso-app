import * as React from 'react';
import {ComponentProps, useMemo} from 'react';
import {Animated} from 'react-native';
import {getFadeInOutOption} from './getFadeInOutOption';

export function FadeAnimation({
  onFinish,
  initialVisible,
  visible,
  duration = 1000,
  delay,
  ...props
}: ComponentProps<typeof Animated.View> & {
  initialVisible?: boolean;
  visible: boolean;
  duration?: number;
  delay?: {fadeIn?: number; fadeOut?: number} | number;
  onFinish?: (visible: boolean) => void;
}) {
  const animation = useMemo(
    () => new Animated.Value(initialVisible ?? visible ? 1 : 0),
    [],
  );
  React.useEffect(() => {
    const option = getFadeInOutOption(delay);
    const targetDelay = visible ? option.fadeIn : option.fadeOut;
    Animated.timing(animation, {
      toValue: visible ? 1 : 0,
      duration,
      useNativeDriver: true,
      delay: targetDelay,
    }).start(() => onFinish?.(visible));
  }, [visible, delay]);
  return (
    <Animated.View {...props} style={[{opacity: animation}, props.style]} />
  );
}
