import * as React from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export function useScrollIsOnTop(offset: number = 0) {
  const [isOnTop, setIsOnTop] = React.useState(true);

  const onScroll = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentY = event.nativeEvent.contentOffset.y;
      setIsOnTop(currentY <= offset);
    },
    [offset],
  );
  return {isOnTop, onScroll};
}
