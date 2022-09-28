import * as React from 'react';
import {ComponentProps, useRef} from 'react';
import {ScrollView} from 'react-native';

export function AutoScrollView(
  props: ComponentProps<typeof ScrollView> & {children: React.ReactNode},
) {
  const ref = useRef<ScrollView>(null);
  return (
    <ScrollView
      ref={ref}
      onContentSizeChange={() => ref.current?.scrollToEnd({animated: true})}
      {...props}
    />
  );
}
