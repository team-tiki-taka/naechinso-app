import {RenderItemProps, WheelPicker} from '@components/form/wheel-picker';
import {Text, Typography} from '@components/text';
import layout from '@constants/layout';
import React, {useCallback} from 'react';

export function SimpleWheelPicker<T extends string | number>({
  items,
  value,
  onChange,
}: {
  items: SimpleWheelPickerItemType<T>[];
  value?: T;
  onChange: (value: T) => void;
}) {
  const renderItem = useCallback((props: RenderItemProps) => {
    return <Text typography={Typography.Subtitle_1_B}>{props.label}</Text>;
  }, []);
  return (
    <WheelPicker
      height={200}
      width={(layout.window.width / 100) * 80}
      initialSelectedIndex={items.findIndex(i => i.value === value)}
      items={items}
      renderItem={renderItem}
      onChange={i => onChange(i.item.value)}
      flatListProps={{windowSize: 3}}
    />
  );
}

export type SimpleWheelPickerItemType<T extends string | number> = {
  label: string;
  value: T;
};
