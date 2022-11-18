import {useCallbackRef, useCombinedRefs} from '@hooks/common';
import * as React from 'react';
import {ComponentProps, useRef} from 'react';
import {ScrollView} from 'react-native';

export function AutoScrollView(
  props: ComponentProps<typeof ScrollView> & {children: React.ReactNode},
) {
  const ref = useRef<ScrollView>(null);
  const toEnd = useCallbackRef(() => {
    ref.current?.scrollToEnd({animated: true});
  });
  const combinedRef = useCombinedRefs(ref, toEnd);
  React.useEffect(() => {
    toEnd();
  }, []);
  return (
    <ScrollView ref={combinedRef} onContentSizeChange={toEnd} {...props} />
  );
}
